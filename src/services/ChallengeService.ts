import { findApiTarget } from "@/utils/apiUtils";
import ApiService from "./ApiService";

type ChallengeType = {
  challenge_image: Base64URLString;
  signed_answer: string;
};

namespace ChallengeService {
  export namespace Api {
    export async function getChallenge(): Promise<{
      response: Response;
      json: ChallengeType;
    }> {
      return await ApiService.V1.get<ChallengeType>({
        path: "captcha",
        base: findApiTarget(),
      });
    }
  }
}

export default ChallengeService;
