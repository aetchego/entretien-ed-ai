import {
  StudentId,
  Student,
  ExamId,
  Exam,
  StudentExamId,
  StudentExam,
  AnswerStatus,
} from "../types";

export class EdService {
  private static latency(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  public async getStudent(id: StudentId): Promise<Student> {
    await EdService.latency(500);
    const students: Record<string, Student> = {
      "789": { id, name: "Blanche Leblanc" },
      "790": { id, name: "Jean Dupont" },
    };
    const student = students[id];
    if (!student) throw new Error("Student not found");
    return student;
  }

  public async getExam(id: ExamId): Promise<Exam> {
    await EdService.latency(500);
    const exams: Record<string, Exam> = {
      "456": {
        id,
        name: "Devoir de mathématique 6",
        areasOfImprovement: [
          "Turpis enim, sagittis nec, aliquam non, blandit nec, enim.",
        ],
      },
      "457": {
        id,
        name: "Examen de physique",
        areasOfImprovement: [
          "Nunc vel risus commodo viverra maecenas accumsan.",
        ],
      },
    };
    const exam = exams[id];
    if (!exam) throw new Error("Exam not found");
    return exam;
  }

  public async getStudentExam(id: StudentExamId): Promise<StudentExam> {
    await EdService.latency(1000);

    const studentExams: Record<string, StudentExam> = {
      "123": {
        id: "123",
        examId: "456",
        studentId: "789",
        aiPerformance: {
          detectionPerformance: 0.8,
        },
        overallEvaluation: {
          grade: "13",
          maxGrade: "20",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
          areasOfImprovement: [
            "Turpis enim, sagittis nec, aliquam non, blandit nec, enim.",
            "Scaevola, locati sunt in agri cultura.",
          ],
        },
        exercices: [
          {
            number: "1 - 1",
            grade: 3,
            maxGrade: 3,
            status: AnswerStatus.CORRECT,
          },
          {
            number: "1 - 2",
            grade: 0,
            maxGrade: 3,
            status: AnswerStatus.NOT_DONE,
          },
          {
            number: "2 - 1.A",
            grade: 3,
            maxGrade: 3,
            status: AnswerStatus.CORRECT,
          },
        ],
      },
      "124": {
        id: "124",
        examId: "457",
        studentId: "790",
        aiPerformance: {
          detectionPerformance: 0.6,
        },
        overallEvaluation: {
          grade: "9",
          maxGrade: "20",
          comment:
            "Performance en dessous des attentes, nécessite une révision plus approfondie.",
          areasOfImprovement: [
            "Améliorer la compréhension des bases.",
            "Pratiquer davantage sur des exercices similaires.",
          ],
        },
        exercices: [
          {
            number: "1 - 1",
            grade: 1,
            maxGrade: 3,
            status: AnswerStatus.WRONG,
          },
          {
            number: "2 - 1.A",
            grade: 2,
            maxGrade: 3,
            status: AnswerStatus.PARTIAL,
          },
        ],
      },
      "125": {
        id: "125",
        examId: "100",
        studentId: "101",
        aiPerformance: {
          detectionPerformance: 0.8,
        },
        overallEvaluation: {
          grade: "13",
          maxGrade: "20",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
          areasOfImprovement: [
            "Turpis enim, sagittis nec, aliquam non, blandit nec, enim.",
            "Scaevola, locati sunt in agri cultura.",
          ],
        },
        exercices: [
          {
            number: "1 - 1",
            grade: 3,
            maxGrade: 3,
            status: AnswerStatus.CORRECT,
          },
          {
            number: "1 - 2",
            grade: 0,
            maxGrade: 3,
            status: AnswerStatus.NOT_DONE,
          },
          {
            number: "2 - 1.A",
            grade: 3,
            maxGrade: 3,
            status: AnswerStatus.CORRECT,
          },
        ],
      },
    };

    const studentExam = studentExams[id];
    if (!studentExam) throw new Error("Student exam not found");
    return studentExam;
  }

  public async downloadPdf(examID: ExamId): Promise<string> {
    await EdService.latency(2000);
    const mockPdfData: Record<string, string> = {
      "123": "PDF Content for Mathematics Exam.",
      "124": "PDF Content for Science Exam.",
    };
    const pdfContent = mockPdfData[examID];
    if (pdfContent) {
      return pdfContent;
    }
    throw new Error(`PDF not found for examID: ${examID}`);
  }
}

export default EdService;
