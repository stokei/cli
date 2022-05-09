import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { IBaseService } from '@stokei/common';
import { AccountModel } from '@stokei/services/accounts/models/account.model';
import { FindAccountByIdQuery } from '@stokei/services/accounts/queries/implements/accounts/find-account-by-id.query';

@Injectable()
export class FindAccountByIdService
  implements IBaseService<string, Promise<AccountModel>>
{
  constructor(private readonly queryBus: QueryBus) {}

  async execute(data: string): Promise<AccountModel> {
    return await this.queryBus.execute(new FindAccountByIdQuery(data));
  }
}
