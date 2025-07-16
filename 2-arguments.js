const age = process.argv.slice(2);

if (age.length === 0){
    console.log('No argument'); 
} else if(age.length === 3) {
    console.log('Argument found');
} else  {
    console.log('Arguments found');
}
