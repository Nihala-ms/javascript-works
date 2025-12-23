for (var r = 1; r <= 4; r++) {
    let pattern = "";
    for (var c = 1; c <= 4; c++) {
        if (c <= r) {

            pattern = pattern + "1";
        }
        else {
            pattern = pattern + "0";
        }
    }

    console.log(pattern);

}