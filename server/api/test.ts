export default defineEventHandler(() => {
  return {
    name: process.env.FIREBASE_PROJECT_ID,
  };
});