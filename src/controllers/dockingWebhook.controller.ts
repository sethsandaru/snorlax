import {webhookRequestRepo} from "../repositories/webhookRequest.repo";

export type DockingWebhookRequest = {
  fileUrl: string;
}

export type DockingWebhookResult = {
  outcome: 'SUCCESS';
}

export default async function dockingWebhookController(request: DockingWebhookRequest): Promise<DockingWebhookResult> {
  await webhookRequestRepo.insert({
    file_url: request.fileUrl,
  });

  return {
    outcome: 'SUCCESS',
  };
}
