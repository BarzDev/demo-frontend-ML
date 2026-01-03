export const textResponse = (data) => {
  const labels = data.recommendations.predicted_job_field.labels;
  const faiss = data.recommendations.faiss;
  const skill = data.recommendations.skill_gap;

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
  return { labels, faissRecommend, skillRecommend };
};
