define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_cdae08a2de5d44a082349b4e110c28a0: function AS_Button_cdae08a2de5d44a082349b4e110c28a0(eventobject) {
        var self = this;
        try {
            kony.accelerometer.retrieveCurrentAcceleration(onSuccessCallback, onFailureCallback);
        } catch (err) {
            alert("Accelerometer not supported");
        }

        function onSuccessCallback(accelerometerdata) {
            alert("X: " + accelerometerdata.x + " Y: " + accelerometerdata.y + " Z: " + accelerometerdata.z);
        }

        function onFailureCallback(error) {
            alert("Accelerometer is not supported in the device.");
        }
    }
});