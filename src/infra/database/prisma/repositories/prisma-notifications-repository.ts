/* eslint-disable prettier/prettier */
import { Notification } from "src/application/entities/notification";
import { NotificationsRepository } from "../../../../application/repositories/notification-repository";
import { PrismaService } from "../prisma.service";

export class PrismaNotificationRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        category: notification.category,
        content: notification.content.value,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createdAt: notification.createdAt
      }
    })
  }
  
}