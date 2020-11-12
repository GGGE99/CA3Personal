/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package utils;

import java.util.HashMap;
import java.util.Map;

/**
 *
 * @author marcg
 */
public class WeatherImagesMap {
    private static HashMap<String, String> map = null;
    
    public HashMap<String, String> getMap(){
        if(map == null){
            map = new HashMap<String, String>();
            setup();
        }
        return map;
    }
    
    private void setup(){
        map.put("clearsky_day", "https://i.ibb.co/CHq98c8/clearsky-day.png");
        map.put("clearsky_night", "https://i.ibb.co/pnKVGJR/clearsky-night.png");
        map.put("clearsky_polartwilight", "https://i.ibb.co/BcgKdpQ/clearsky-polartwilight.png");
        map.put("cloudy", "https://i.ibb.co/Q9FgX5M/cloudy.png");
        map.put("fair_day", "https://i.ibb.co/6n4YcFn/fair-day.png");
        map.put("fair_night", "https://i.ibb.co/SvtSzWs/fair-night.png");
        map.put("fair_polartwilight", "https://i.ibb.co/frWfgTh/fair-polartwilight.png");
        map.put("fog", "https://i.ibb.co/vhrwLkH/fog.png");
        map.put("heavyrain", "https://i.ibb.co/TqWdFR8/heavyrain.png");
        map.put("heavyrainandthunder", "https://i.ibb.co/kX9s0HY/heavyrainandthunder.png");
        map.put("heavyrainshowers_day", "https://i.ibb.co/rbzpqZJ/heavyrainshowers-day.png");
        map.put("heavyrainshowers_night", "https://i.ibb.co/vdRZ5hv/heavyrainshowers-night.png");
        map.put("heavyrainshowers_polartwilight", "https://i.ibb.co/V2xb9FZ/heavyrainshowers-polartwilight.png");
        map.put("heavyrainshowersandthunder_day", "https://i.ibb.co/FDRBRt5/heavyrainshowersandthunder-day.png");
        map.put("heavyrainshowersandthunder_night", "https://i.ibb.co/jTp0RPC/heavyrainshowersandthunder-night.png");
        map.put("heavyrainshowersandthunder_polartwilight", "https://i.ibb.co/mCDNKFK/heavyrainshowersandthunder-polartwilight.png");
        map.put("heavysleet", "https://i.ibb.co/smKH2wX/heavysleet.png");
        map.put("heavysleetandthunder", "https://i.ibb.co/hZyfGfr/heavysleetandthunder.png");
        map.put("heavysleetshowers_day", "https://i.ibb.co/WgHgXRH/heavysleetshowers-day.png");
        map.put("heavysleetshowers_night", "https://i.ibb.co/5BymJT0/heavysleetshowers-night.png");
        map.put("heavysleetshowers_polartwilight", "https://i.ibb.co/Zmt7Jmj/heavysleetshowers-polartwilight.png");
        map.put("heavysleetshowersandthunder_day", "https://i.ibb.co/y5wTy6P/heavysleetshowersandthunder-day.png");
        map.put("heavysleetshowersandthunder_night", "https://i.ibb.co/4K3JxR3/heavysleetshowersandthunder-night.png");
        map.put("heavysleetshowersandthunder_polartwilight", "https://i.ibb.co/Gc5rddK/heavysleetshowersandthunder-polartwilight.png");
        map.put("heavysnow", "https://i.ibb.co/GCtKDrx/heavysnow.png");
        map.put("heavysnowandthunder", "https://i.ibb.co/8gqSt8w/heavysnowandthunder.png");
        map.put("heavysnowshowers_day", "https://i.ibb.co/yXNFgjh/heavysnowshowers-day.png");
        map.put("heavysnowshowers_night", "https://i.ibb.co/fppqqsq/heavysnowshowers-night.png");
        map.put("heavysnowshowers_polartwilight", "https://i.ibb.co/sKSD6N5/heavysnowshowers-polartwilight.png");
        map.put("heavysnowshowersandthunder_day", "https://i.ibb.co/kG3mYJP/heavysnowshowersandthunder-day.png");
        map.put("heavysnowshowersandthunder_night", "-https://i.ibb.co/28RMK2R/heavysnowshowersandthunder-night.png");
        map.put("heavysnowshowersandthunder_polartwilight", "https://i.ibb.co/Jy27V9k/heavysnowshowersandthunder-polartwilight.png");
        map.put("lightrain", "https://i.ibb.co/JyXxgkX/lightrain.png");
        map.put("lightrainandthunder", "https://i.ibb.co/JCtBFLy/lightrainandthunder.png");
        map.put("lightrainshowers_day", "https://i.ibb.co/LRxPV9w/lightrainshowers-day.png");
        map.put("lightrainshowers_night", "https://i.ibb.co/tKK3jmH/lightrainshowers-night.png");
        map.put("lightrainshowers_polartwilight", "https://i.ibb.co/27Lsr4h/lightrainshowers-polartwilight.png");
        map.put("lightrainshowersandthunder_day", "https://i.ibb.co/GMYvpZz/lightrainshowersandthunder-day.png");
        map.put("lightrainshowersandthunder_night", "https://i.ibb.co/5sdscNn/lightrainshowersandthunder-night.png");
        map.put("lightrainshowersandthunder_polartwilight", "https://i.ibb.co/M6LtNPc/lightrainshowersandthunder-polartwilight.png");
        map.put("lightsleet", "https://i.ibb.co/HY5xYFJ/lightsleet.png");
        map.put("lightsleetandthunder", "https://i.ibb.co/kKHLsSp/lightsleetandthunder.png");
        map.put("lightsleetshowers_day", "https://i.ibb.co/DM4Xr4j/lightsleetshowers-day.png");
        map.put("lightsleetshowers_night", "https://i.ibb.co/TbgdN8M/lightsleetshowers-night.png");
        map.put("lightsleetshowers_polartwilight", "https://i.ibb.co/KLQsXFq/lightsleetshowers-polartwilight.png");
        map.put("lightsnow", "https://i.ibb.co/17GYspv/lightsnow.png");
        map.put("lightsnowandthunder", "https://i.ibb.co/k4tJj5M/lightsnowandthunder.png");
        map.put("lightsnowshowers_day", "https://i.ibb.co/dLp0w0M/lightsnowshowers-day.png");
        map.put("lightsnowshowers_night", "https://i.ibb.co/tm0s8Qx/lightsnowshowers-night.png");
        map.put("lightsnowshowers_polartwilight", "https://i.ibb.co/5k4QqPX/lightsnowshowers-polartwilight.png");
        map.put("lightssleetshowersandthunder_day", "https://i.ibb.co/vD6vmq4/lightssleetshowersandthunder-day.png");
        map.put("lightssleetshowersandthunder_night", "https://i.ibb.co/P5G8t0h/lightssleetshowersandthunder-polartwilight.png");
        map.put("lightssleetshowersandthunder_polartwilight", "https://i.ibb.co/wKwPwPM/lightssleetshowersandthunder-night.png");
        map.put("lightssnowshowersandthunder_day", "https://i.ibb.co/cQ9xXGb/lightssnowshowersandthunder-night.png");
        map.put("lightssnowshowersandthunder_night", "https://i.ibb.co/bWB6frs/lightssnowshowersandthunder-day.png");
        map.put("lightssnowshowersandthunder_polartwilight", "https://i.ibb.co/7RhNvYL/lightssnowshowersandthunder-polartwilight.png");
        map.put("partlycloudy_day", "https://i.ibb.co/WtxwC9J/partlycloudy-day.png");
        map.put("partlycloudy_night", "https://i.ibb.co/YcQgR0P/partlycloudy-night.png");
        map.put("partlycloudy_polartwilight", "https://i.ibb.co/hsxtmtv/partlycloudy-polartwilight.png");
        map.put("rain", "https://i.ibb.co/hdBZdD6/rainandthunder.png");
        map.put("rainandthunder", "https://i.ibb.co/j6ms92t/rain.png");
        map.put("rainshowers_day", "https://i.ibb.co/5npPt2p/rainshowers-day.png");
        map.put("rainshowers_night", "https://i.ibb.co/DRGBQ2x/rainshowers-night.png");
        map.put("rainshowers_polartwilight", "https://i.ibb.co/Mhd5sWX/rainshowers-polartwilight.png");
        map.put("rainshowersandthunder_day", "https://i.ibb.co/vqCqqYP/rainshowersandthunder-day.png");
        map.put("rainshowersandthunder_night", "https://i.ibb.co/sj9vnb5/rainshowersandthunder-night.png");
        map.put("rainshowersandthunder_polartwilight", "https://i.ibb.co/vQZpjkH/rainshowersandthunder-polartwilight.png");
        map.put("sleet", "https://i.ibb.co/SQqt8Dc/sleet.png");
        map.put("sleetandthunder", "https://i.ibb.co/440RDS2/sleetandthunder.png");
        map.put("sleetshowers_day", "https://i.ibb.co/BCyrXFw/sleetshowers-day.png");
        map.put("sleetshowers_night", "https://i.ibb.co/py1Ypdp/sleetshowers-night.png");
        map.put("sleetshowers_polartwilight", "https://i.ibb.co/L83xDgR/sleetshowers-polartwilight.png");
        map.put("sleetshowersandthunder_day", "https://i.ibb.co/WkdKh8P/sleetshowersandthunder-day.png");
        map.put("sleetshowersandthunder_night", "https://i.ibb.co/b650sTH/sleetshowersandthunder-night.png");
        map.put("sleetshowersandthunder_polartwilight", "https://i.ibb.co/dpxfMFN/sleetshowersandthunder-polartwilight.png");
        map.put("snow", "https://i.ibb.co/Pw4fLTv/snow.png");
        map.put("snowandthunder", "https://i.ibb.co/9rYQgqj/snowandthunder.png");
        map.put("snowshowers_day", "https://i.ibb.co/2WvHmjn/snowshowers-day.png");
        map.put("snowshowers_night", "https://i.ibb.co/2WGLBpF/snowshowers-night.png");
        map.put("snowshowers_polartwilight", "https://i.ibb.co/sRnkfHt/snowshowers-polartwilight.png");
        map.put("snowshowersandthunder_day", "https://i.ibb.co/b2bfG7b/snowshowersandthunder-day.png");
        map.put("snowshowersandthunder_night", "https://i.ibb.co/VBLgk1s/snowshowersandthunder-night.png");
        map.put("snowshowersandthunder_polartwilight", "https://i.ibb.co/hDjjCtk/snowshowersandthunder-polartwilight.png");
    }

}
