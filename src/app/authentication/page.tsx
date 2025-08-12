import BaseLayoutPageWrapper from "@/components/baseLayoutPageWrapper";
import LoginForm from "@/components/loginForm";

export default function Authentication() {
  return (
    <BaseLayoutPageWrapper props={{ showCategories: true }}>
      <main
        className="display-flex flex-column align-items-center full-width squish-48 squeeze-16"
        style={{ gridRowStart: 2 }}
      >
        <LoginForm />
      </main>
    </BaseLayoutPageWrapper>
  );
}
