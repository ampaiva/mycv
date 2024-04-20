
// Function to recursively extract and aggregate tags from nested objects
function extractAndAggregateTags(obj) {
  let aggregatedTags = [];

  // Check if the object is an array or an object
  if (Array.isArray(obj)) {
      // If it's an array, iterate over its elements
      obj.forEach(element => {
          // Recursively extract and aggregate tags from each element
          aggregatedTags.push(...extractAndAggregateTags(element));
      });
  } else if (typeof obj === 'object') {
      // If it's an object, iterate over its keys
      Object.keys(obj).forEach(key => {
          // If the key is "tags" and the value is an array, merge it with the aggregatedTags
          if (key === 'tags' && Array.isArray(obj[key])) {
              aggregatedTags.push(...obj[key]);
          }
          // Recursively extract and aggregate tags from nested objects
          aggregatedTags.push(...extractAndAggregateTags(obj[key]));
      });
      if (aggregatedTags.length)
        obj.tags = aggregatedTags;
    }

  return aggregatedTags;
}


function printComplexObj(complexJsonObject) {
    // Convert the complexJsonObject back to JSON string
    let updatedComplexJsonText = JSON.stringify(complexJsonObject, null, 2);

    console.log(updatedComplexJsonText);
}

function mergeChildrenTags(complexJsonObject) {

  // Initialize an array to hold aggregated tags
  let aggregatedTags = [];

  // Recursively extract tags from the complexJsonObject
  extractAndAggregateTags(complexJsonObject, aggregatedTags);

  // Remove duplicate tags
  aggregatedTags = [...new Set(aggregatedTags)];

  // Add the aggregatedTags to the complexJsonObject
  if (aggregatedTags.length > 0) {
    complexJsonObject.tags = aggregatedTags;
  }

  printComplexObj(complexJsonObject);

  return complexJsonObject;
}

export function getRichObject(text) {
  let complexJsonObject = JSON.parse(text);
  
  mergeChildrenTags(complexJsonObject.sections);

  return complexJsonObject;
}
