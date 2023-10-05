import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export const subscriptions = async ({ email }) => {
  try {
    const { data, error } = await supabase
      .from("NewsletterSubs")
      .insert([{ user_email: email }])
      .select();
    console.log(data, error);
  } catch (error) {
    console.log(error);
  }
};

export const feedbacks = async ({ feedback }) => {
  try {
    const { data, error } = await supabase
      .from("users_feedback")
      .insert([{ user_feedback: feedback }])
      .select();
    console.log(data, error);
  } catch (error) {
    console.log(error);
  }
};
