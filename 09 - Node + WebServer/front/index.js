const handleGet = async () => {
  try {
    const res = await axios.get("http://localhost:8080/");
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
async function checkAdmission(studentName, age, ability, e) {
  e.preventDefault();
  const validStudent = await handleGet();
  const validName = !validStudent.nameNotEqual.includes(studentName);
  const validAge = age >= validStudent.minAge && age <= validStudent.maxAge;
  const validAbility = validStudent.ability.includes(ability);
  if (validName && validAge && validAbility)
    alert("you are allowed to enter the course✅");
  else {
    alert("you aren't allowed to enter the course❌");
  }
}
getButton.addEventListener("click", (e) =>
  checkAdmission(studentName.value, age.value, ability.value, e)
);
postButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const res = await axios.post("http://localhost:8080/", {
    studentName: studentName.value,
    age: age.value,
    ability: ability.value,
  });
  checkAdmission(res.data.studentName, res.data.age, res.data.ability, e);
});
