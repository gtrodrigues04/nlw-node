/* eslint-disable prettier/prettier */
import { Content } from "./Content"
import { Notification } from "./notification";

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade'),
      category: 'social',
      recipientId: 'exemple',
    });
    
    expect(notification).toBeTruthy();
  });
});