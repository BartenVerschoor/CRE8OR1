define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_id6126efaad04686acf5a406d412e5a3: function AS_Button_id6126efaad04686acf5a406d412e5a3(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmHome");
        ntf.navigate();
    },
    AS_Camera_b0a2f2637d304a0fb41ee94e0889a79e: function AS_Camera_b0a2f2637d304a0fb41ee94e0889a79e(eventobject, x, y) {
        var self = this;
    },
    AS_Camera_b764fc8dbfc949e2b4b36a7108f1ee08: function AS_Camera_b764fc8dbfc949e2b4b36a7108f1ee08(eventobject) {
        var self = this;
        kony.application.getCurrentForm().cameraImage.rawBytes = kony.application.getCurrentForm().Camera.rawBytes;
    }
});