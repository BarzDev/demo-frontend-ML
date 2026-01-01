export const textResponse = (labels, faiss, skill) => {
  const faissRecommend = faiss.map((item) => item.job_title).join(", ");
  const skillRecommend = skill
    .map((item) => `${item.skill} (${(item.final_score * 100).toFixed(0)}%)`)
    .join(", ");

  //   console.log("Job: ", job);
  //   console.log("Faiss: ", faissRecommend);
  //   console.log("Skill: ", skillRecommend);

  const text = `Recomendasi yg cocok untuk kamu adalah ${labels}.
    Berikut adalah beberapa rekomendasi pekerjaan yang cocok untuk anda : ${faissRecommend}.
    dan rekomendasi skill yang dapat ditingkatkan ${skillRecommend}`;
  return text;
};
