import { useEffect, useMemo, useRef, useState } from "react";
import { EdService } from "../services/EDService";
import { Exam, Grade, Student, StudentExam } from "../types";

export const useEvaluation = (id: string | undefined) => {
  const [student, setStudent] = useState<Student | null>(null);
  const [studentExam, setStudentExam] = useState<StudentExam | null>(null);
  const [exam, setExam] = useState<Exam | null>(null);
  const [pdf, setPdf] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const instance = useRef(new EdService());

  const fetchData = async (id: string) => {
    try {
      const studentExam = await instance.current.getStudentExam(id);
      const [student, exam, pdf] = await Promise.all([
        instance.current.getStudent(studentExam.studentId),
        instance.current.getExam(studentExam.examId),
        instance.current.download(),
      ]);
      setStudentExam(studentExam);
      setExam(exam);
      setStudent(student);
      setPdf(pdf);
    } catch (e) {
      console.log("test error", e);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData(id);
      setError(false);
      setLoading(true);
    }
  }, [id]);

  const grades: Grade | null = useMemo(() => {
    const grade = studentExam?.overallEvaluation.grade;
    const maxGrade = studentExam?.overallEvaluation.maxGrade;
    if (grade && maxGrade) return [grade, maxGrade];
    return null;
  }, [
    studentExam?.overallEvaluation.grade,
    studentExam?.overallEvaluation.maxGrade,
  ]);

  return {
    loading,
    error,
    pdf,
    studentName: student?.name,
    examName: exam?.name,
    grades,
    aiDetection: studentExam?.aiPerformance.detectionPerformance,
    comment: studentExam?.overallEvaluation?.comment,
    exercices: studentExam?.exercices,
  };
};
