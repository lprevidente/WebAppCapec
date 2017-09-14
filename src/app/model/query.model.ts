/**
 * Here is where i define the Characteristics of a query.
 */

export class Query {
  /**
   * Id: Identify the query
   * Description: describe what the query does
   * Sql: contains the string sql to execute
   */
  constructor ( public id?: number, public description?: string, public sql?: string) {}

}