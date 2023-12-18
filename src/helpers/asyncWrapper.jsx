export const asyncWrapper = async (reqFunc) => {
  let data = "";

  try {
    data = await reqFunc();
  } catch (error) {
    console.log(error);
  }

  return data;
};
