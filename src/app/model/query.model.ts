/**
 * Here is where i define the Characteristics of a query.
 */

export class Query {
  /**
   * Id: Identify the query
   * Description: describe what the query does
   * Sql: contains the string sql to execute
   */
  constructor ( public id?: number, public firstTable?: string, public secondTable?: string,
                public relationship?: string, public sql?: string, public description?: string, 
                public firstSelected ?: string, public secondSelected ?: string) {}

}