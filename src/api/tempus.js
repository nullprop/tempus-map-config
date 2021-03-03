const { graphql } = require("graphql");
const { schema } = require("tempus-api-graphql");

export async function getMaps(tier, className) {
  let mapList = await getMapList();
  return mapList.filter((x) => x.tiers[className] === tier);
}

async function getMapList() {
  const query = `
    {
      maps
      {
        name
        tiers {
          soldier
          demoman
        }
      }
    }
  `;

  const result = await graphql(schema, query);
  if (result.errors) {
    throw result.errors[0];
  }
  return result.data.maps;
}
