const profile = {
    username: "Jacob",
    playTime: 300,
    changeUsername(newName) {
        this.name = newName
    },
    updatePlayTime(hours) {
        this.playTime += hours
    },
    getInfo() {
        return `${this.username} has ${this.playTime} active hours!`
    }
};


console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"

// як на мене задачка номер три була простіша за всі ішні. Коли написав код навіть і не думав, що це насправді так 
