export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { resume } = req.body;
  if (!resume) {
    return res.status(400).json({ error: "No resume provided" });
  }

  // Simulating AI analysis (replace with OpenAI API call)
  const feedback = `Your resume is well-structured but could use more action verbs and ATS-friendly formatting.`;

  res.status(200).json({ feedback });
}
