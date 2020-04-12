console.log(getZipName("videoName_24.mp4", [0, 3, 6, 11, 15, 19])); 
function getZipName(videoName, filledFrames) {

    // Just making sure video name is w/ the underscore and not something else 
    let endString = videoName.replace(".", "_"); 
  
    // Iterate through every pair of two 
    // This won't error b/c filledFrames is effectively guaranteed to be an even length 
    for (let i = 0; i < filledFrames.length; i += 2) {
      endString += "_"; 
      endString += filledFrames[i]; 
      endString += "_"; 
      endString += filledFrames[i + 1]; 
    }
  
    return endString; 
  }