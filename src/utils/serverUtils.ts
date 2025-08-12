import { cookies } from "next/headers";

export async function getSessionCookie(): Promise<string> {
  const cookieStore = await cookies();
  const accessToken = process.env.VITE_JWT_COOKIE_NAME
    ? cookieStore.get(process.env.VITE_JWT_COOKIE_NAME)
    : null;
  const session = accessToken?.value || "void";

  return session;
}
