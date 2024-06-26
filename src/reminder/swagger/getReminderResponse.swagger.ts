import { ApiProperty } from '@nestjs/swagger';

export class GetReminderResponse {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  platform: string;

  @ApiProperty()
  scheduled: string;

  @ApiProperty()
  isActivated: boolean;

  @ApiProperty()
  categoryId: number;

  @ApiProperty()
  ownerId: number;

  @ApiProperty()
  createdAt: string;

  @ApiProperty()
  updatedAt: string;
}
