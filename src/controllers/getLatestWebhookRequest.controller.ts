import {webhookRequestRepo, WebhookRequestTable} from "../repositories/webhookRequest.repo";

export default async function getLatestWebhookRequestController(): Promise<WebhookRequestTable | undefined> {
  return await webhookRequestRepo.getLatest();
}
