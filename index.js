function distanceFromHqInBlocks(i){
    if(i<42){
        return(42-i);
    }
    else {
        return(i-42);
    }
}

function distanceFromHqInFeet(n){
return distanceFromHqInBlocks(n) * 264
}

function distanceTravelledInFeet(start, destination) {
        return Math.abs((start-destination) * 264)
    }


      function calculatesFarePrice(start,destination){
        let distance = distanceTravelledInFeet(start,destination);
        if (distance<= 400){
          return 0;
        }
        if (distance>=400 && distance<=2000){
          return (distance-400)* 0.02;
        }
        else if(distance>=2000&& distance<=2500){
          return 25;
        }
        else if (distance > 2500){
          return "cannot travel that far";
        }
      }


    // given start and end block
    // calculate number of feet
    // initialize price
    // if feet <= 400, price = 0 
    // if feet >+ 400 && feet <= 2000, if total distance 2 cents per foot
    // feet - 400 x 0.02 = total fare
    // >= 2000 feet and under <= 2500 feet = flat fare
    // if feet is >= 2500 = 'cannot travel that far'

    