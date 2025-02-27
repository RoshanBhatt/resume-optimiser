import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ResumeOptimizer() {
  const [resume, setResume] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeResume = async () => {
    setLoading(true);
    setAnalysis(null);
    
    const response = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resume }),
    });

    const data = await response.json();
    setAnalysis(data);
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-xl">
      <h1 className="text-xl font-bold mb-4">AI Resume Optimizer</h1>
      <Textarea
        value={resume}
        onChange={(e) => setResume(e.target.value)}
        placeholder="Paste your resume here..."
        className="mb-4 h-40"
      />
      <Button onClick={analyzeResume} disabled={loading}>
        {loading ? "Analyzing..." : "Optimize Resume"}
      </Button>
      {analysis && (
        <div className="mt-4 p-4 border rounded-lg">
          <h2 className="font-semibold">Analysis:</h2>
          <p>{analysis.feedback}</p>
        </div>
      )}
    </div>
  );
}
