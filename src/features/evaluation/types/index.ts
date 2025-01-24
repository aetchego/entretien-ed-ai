export type UUID = string;

export type ExamId = UUID;
export type StudentId = UUID;
export type StudentExamId = UUID;

export type AreaOfImprovement = string;

export enum AnswerStatus {
  CORRECT = "CORRECT",
  NOT_DONE = "NOT_DONE",
  WRONG = "WRONG",
  PARTIAL = "PARTIAL",
  UNKNOW = "UNKNOWN"
}

export enum AnswerStatusLabel {
  CORRECT = "Juste",
  NOT_DONE = "Absent",
  WRONG = "Faux",
  PARTIAL = "Partiel",
  UNKNOW = "Inconnu"
}

export type Exam = {
  id: ExamId;
  name: string;
  areasOfImprovement: AreaOfImprovement[];
};

export type Student = {
  id: StudentId;
  name: string;
};

export type StudentExam = {
  id: StudentExamId;
  examId: ExamId;
  studentId: StudentId;
  aiPerformance: {
    detectionPerformance: number;
  };
  overallEvaluation: {
    grade: string;
    maxGrade: string;
    comment: string;
    areasOfImprovement: AreaOfImprovement[];
  };
  exercices: {
    number: string;
    grade: number;
    maxGrade: number;
    status: AnswerStatus;
  }[];
};
