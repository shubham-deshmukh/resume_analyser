interface Resume {
  id: string;
  companyName?: string;
  jobTitle: string;
  imagePath: string;
  resumePath: string;
  feedback: Feedback;
}

interface Suggestion {
  type: "good" | "improve";
  tip: string;
}

interface DetailedSuggestion extends Suggestion {
  explanation: string;
}

interface Feedback {
  overallScore: number;
  ATS: {
    score: number;
    tips: Suggestion[];
  };
  toneAndStyle: {
    score: number;
    tips: DetailedSuggestion[];
  };
  content: {
    score: number;
    tips: DetailedSuggestion[];
  };
  structure: {
    score: number;
    tips: DetailedSuggestion[];
  };
  skills: {
    score: number;
    tips: DetailedSuggestion[];
  };
}
