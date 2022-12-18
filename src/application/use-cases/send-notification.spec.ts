/* eslint-disable prettier/prettier */
import { InMemoryNotificationsRepository } from "../../../test/in-memory-notifications-repository";
import { SendNotification } from "./send-notification";

it('Send notification', async () => {
  const notificationRepository =  new InMemoryNotificationsRepository();
  const sendNotification = new SendNotification(notificationRepository);

  const {notification } = await sendNotification.execute({
    content: 'This is a notification',
    category: 'social',
    recipientId: 'exemple-recipient-id'
  });
  expect(notificationRepository.notifications).toHaveLength(1);
  expect(notificationRepository.notifications[0]).toEqual(notification);
})