const airplane = {
    isFlying: false,
    takeOff:function () {
        this.isFlying = true
    },
    land: function () {
        this.isFlying = false
    },
}

const boeing = Object.create(airplane)
const airbus = Object.create(airplane)

boeing.takeOff()
boeing.land()
console.log('boeing:',boeing.isFlying);
airbus.takeOff()
console.log('airbus:',airbus.isFlying);


