import { useEffect, useRef, useState } from "react";
import { EdService } from "../../../services/EDService";
import { Exam, Student, StudentExam } from "../types";

type Evaluation = {
  student: Student | null;
  exam: Exam | null;
  studentExam: StudentExam | null;
};

export const useEvaluation = (id: string | undefined) => {
  const [evaluation, setEvaluation] = useState<Evaluation>({
    student: null,
    exam: null,
    studentExam: null,
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const instance = useRef(new EdService());

  const fetchStudent = async (id: string) => {
    try {
      const results = await instance.current.getStudent(id);
      setEvaluation((prevState) => ({ ...prevState, student: results }));
      setLoading(false);
    } catch (e) {
      setError(true);
    }
  };

  const fetchExam = async (id: string) => {
    try {
      const results = await instance.current.getExam(id);
      setEvaluation((prevState) => ({ ...prevState, exam: results }));
      setLoading(false);
    } catch (e) {
      setError(true);
    }
  };

  const fetchStudentExam = async (id: string) => {
    try {
      const results = await instance.current.getStudentExam(id);
      setEvaluation((prevState) => ({ ...prevState, studentExam: results }));
    } catch (e) {
      setError(true);
    }
  };

  useEffect(() => {
    if (id) fetchStudentExam(id);
  }, [id]);

  useEffect(() => {
    if (evaluation.studentExam?.studentId)
      fetchStudent(evaluation.studentExam?.studentId);
  }, [evaluation.studentExam?.studentId]);

  useEffect(() => {
    if (evaluation.studentExam?.examId)
      fetchExam(evaluation.studentExam?.examId);
  }, [evaluation.studentExam?.examId]);

  return {
    loading,
    error,
    evaluation,
  };
};
