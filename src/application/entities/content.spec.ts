/* eslint-disable prettier/prettier */
import { Content } from "./Content"

describe('Notification content', () => {
  it('it should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade')
  
    expect(content).toBeTruthy();
  });
  
  it('it should be not able to create a notification content with less then 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });
  
  it('it should be not able to create a notification content with more then 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow;
  });
});
