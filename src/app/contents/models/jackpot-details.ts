export class JackpotDetails {
    constructor(
      public jackpot_id: number,
      public amount: number,
      public category_description: string,
      public category_id: number,
      public game_description: string,
      public game_id: number,
      public machine_description: string,
      public machine_id: number,
      public is_progressive: boolean
    ) {}
  }
  