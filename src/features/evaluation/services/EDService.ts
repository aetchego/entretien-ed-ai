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
    if (id !== "789") throw new Error("Student not found");
    return {
      id,
      name: "BLanche Leblanc",
    };
  }

  public async getExam(id: ExamId): Promise<Exam> {
    await EdService.latency(500);
    if (id !== "456") throw new Error("Exam not found");
    return {
      id,
      name: "Devoir de mathÃ©matique 6",
      areasOfImprovement: [
        "Turpis enim, sagittis nec, aliquam non, blandit nec, enim.",
      ],
    };
  }

  public async getStudentExam(id: StudentExamId): Promise<StudentExam> {
    await EdService.latency(1000);
    if (id !== "123") throw new Error("Student exam not found");
    return {
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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
        areasOfImprovement: [
          "Turpis enim, sagittis nec, aliquam non, blandit nec, enim.",
          "Scaevola, locati sunt in agri cultura, qui frumenta viride metiri ac viridaria potest.",
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
          number: "1 - 3",
          grade: 1,
          maxGrade: 1,
          status: AnswerStatus.CORRECT,
        },
        {
          number: "2 - 1.A",
          grade: 3,
          maxGrade: 3,
          status: AnswerStatus.CORRECT,
        },
        {
          number: "2 - 1.B",
          grade: 1,
          maxGrade: 2,
          status: AnswerStatus.PARTIAL,
        },
        {
          number: "2 - 2",
          grade: 0.5,
          maxGrade: 2,
          status: AnswerStatus.WRONG,
        },
        {
          number: "3 - A",
          grade: 3,
          maxGrade: 3,
          status: AnswerStatus.CORRECT,
        },
        {
          number: "3 - B",
          grade: 0,
          maxGrade: 3,
          status: AnswerStatus.PARTIAL,
        },
      ],
    };
  }

  public async download() {
    await EdService.latency(2000);
    return "Some fake PDF content";
  }
}
