// services
import SubscriptionService from "@/services/SubscriptionService";

const { attemptConfirmSubscription } = SubscriptionService.Api;

export default async function SubscriptionConfirmationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let message = "";

  try {
    const [subscriptionRequest] = await Promise.all([
      attemptConfirmSubscription(slug, {}),
    ]);

    if (subscriptionRequest.response.ok) {
      message = "Subscription confirmation successful.";
    } else {
      message = "Confirmation link is invalid or expired.";
    }

    console.log(subscriptionRequest.json);
  } catch (e) {
    if (process.env.VITE_DEBUG) console.error(e);

    message = "Server error.";
  }

  return (
    <>
      <section className="flex-row justify-content-center squish-24 squeeze-24">
        <p>{message}</p>
      </section>
    </>
  );
}
