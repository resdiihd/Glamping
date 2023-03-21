var APP_DATA = {
  "scenes": [
    {
      "id": "0-tang-ham",
      "name": "tang ham",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.384754781142453,
          "pitch": 0.18109704179340191,
          "rotation": 0,
          "target": "1-ct-ham"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-ct-ham",
      "name": "ct ham",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.043003788899820705,
          "pitch": 0.17374066021993428,
          "rotation": 0,
          "target": "0-tang-ham"
        },
        {
          "yaw": -0.8888546427323387,
          "pitch": 0.06758582582302353,
          "rotation": 0,
          "target": "2-ct-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ct-1",
      "name": "ct 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2097816567044912,
          "pitch": 0.44728395274266397,
          "rotation": 0,
          "target": "1-ct-ham"
        },
        {
          "yaw": 1.7487494351460384,
          "pitch": 0.032631281657531375,
          "rotation": 0,
          "target": "3-tang-1"
        },
        {
          "yaw": 0.9647583625601026,
          "pitch": 0.13440590612565373,
          "rotation": 0,
          "target": "5-ct-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-tang-1",
      "name": "tang 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.04724717270682888,
          "pitch": 0.03452148870979954,
          "rotation": 0,
          "target": "2-ct-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-wc-2",
      "name": "wc 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2017638173230072,
          "pitch": 0.23538543365332387,
          "rotation": 0,
          "target": "5-ct-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-ct-2",
      "name": "ct 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.924170369984642,
          "pitch": 0.19364697731553449,
          "rotation": 0,
          "target": "4-wc-2"
        },
        {
          "yaw": 0.05336181473609969,
          "pitch": 0.10187262944568687,
          "rotation": 0,
          "target": "6-tang-2"
        },
        {
          "yaw": -1.395802016987295,
          "pitch": 0.5452022637529534,
          "rotation": 0,
          "target": "2-ct-1"
        },
        {
          "yaw": -1.0985555729899623,
          "pitch": 0.04025324479572312,
          "rotation": 0,
          "target": "8-ct-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-tang-2",
      "name": "tang 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.040360623912370386,
          "pitch": 0.11404369603846476,
          "rotation": 0,
          "target": "5-ct-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-wc-3",
      "name": "wc 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9850903387402274,
          "pitch": 0.0749910600654573,
          "rotation": 0,
          "target": "7-wc-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-ct-3",
      "name": "ct 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.11576466323074008,
          "pitch": 0.11133316388157155,
          "rotation": 0,
          "target": "9-tang-3"
        },
        {
          "yaw": -2.7509141731806555,
          "pitch": 0.31299636041740264,
          "rotation": 0,
          "target": "7-wc-3"
        },
        {
          "yaw": -1.6727834162707005,
          "pitch": 0.5071143330215548,
          "rotation": 0,
          "target": "5-ct-2"
        },
        {
          "yaw": -1.317582608597517,
          "pitch": 0.10421425871066958,
          "rotation": 0,
          "target": "11-ct-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-tang-3",
      "name": "tang 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1116919112855257,
          "pitch": 0.04009499901964553,
          "rotation": 0,
          "target": "8-ct-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-wc-4",
      "name": "wc 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3701285049599754,
          "pitch": 0.15600791547120707,
          "rotation": 0,
          "target": "11-ct-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-ct-4",
      "name": "ct 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.12532247479662928,
          "pitch": 0.0051001428905657065,
          "rotation": 0,
          "target": "12-tang-4"
        },
        {
          "yaw": -1.0310290390263148,
          "pitch": 0.04409990171134659,
          "rotation": 0,
          "target": "14-ct-5"
        },
        {
          "yaw": -1.340944221465607,
          "pitch": 0.4802793999358279,
          "rotation": 0,
          "target": "8-ct-3"
        },
        {
          "yaw": -2.859124808696606,
          "pitch": 0.34713997164417165,
          "rotation": 0,
          "target": "10-wc-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-tang-4",
      "name": "tang 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0370477924256267,
          "pitch": 0.068440677005416,
          "rotation": 0,
          "target": "11-ct-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-wc-5",
      "name": "wc 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.325539808148518,
          "pitch": 0.1151441141693077,
          "rotation": 0,
          "target": "14-ct-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-ct-5",
      "name": "ct 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.16444644135839503,
          "pitch": 0.13781629532425654,
          "rotation": 0,
          "target": "15-tang-5"
        },
        {
          "yaw": -0.9778551190871525,
          "pitch": 0.06665643198007842,
          "rotation": 0,
          "target": "17-ct-6"
        },
        {
          "yaw": -1.2916321594019848,
          "pitch": 0.5324826622991772,
          "rotation": 0,
          "target": "11-ct-4"
        },
        {
          "yaw": -2.889226192964575,
          "pitch": 0.24820704298074503,
          "rotation": 0,
          "target": "13-wc-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-tang-5",
      "name": "tang 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.009549159994539,
          "pitch": 0.061574184293995415,
          "rotation": 0,
          "target": "14-ct-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-wc-6",
      "name": "wc 6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8515853891365648,
          "pitch": 0.10106030063280969,
          "rotation": 0,
          "target": "17-ct-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-ct-6",
      "name": "ct 6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.07271604589292124,
          "pitch": 0.08955706856592016,
          "rotation": 0,
          "target": "18-tang-6"
        },
        {
          "yaw": -1.3513364115955504,
          "pitch": 0.5362883550518589,
          "rotation": 0,
          "target": "14-ct-5"
        },
        {
          "yaw": -1.0316141139213801,
          "pitch": 0.14520151846297935,
          "rotation": 0,
          "target": "20-ct-7"
        },
        {
          "yaw": -2.8295243208757803,
          "pitch": 0.28110051103444,
          "rotation": 0,
          "target": "16-wc-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-tang-6",
      "name": "tang 6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.06341401223589749,
          "pitch": 0.08021012369843739,
          "rotation": 0,
          "target": "17-ct-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-wc-7",
      "name": "wc 7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6271961210900887,
          "pitch": 0.060420656103495674,
          "rotation": 0,
          "target": "20-ct-7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-ct-7",
      "name": "ct 7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.005910788451783944,
          "pitch": 0.1802482185844525,
          "rotation": 0,
          "target": "19-wc-7"
        },
        {
          "yaw": 1.4280603114870019,
          "pitch": 0.5148840877047522,
          "rotation": 0,
          "target": "17-ct-6"
        },
        {
          "yaw": 3.1008838892561057,
          "pitch": 0.10999564077718738,
          "rotation": 0,
          "target": "21-tang-7"
        },
        {
          "yaw": 1.7167218652324383,
          "pitch": 0.00010344727755651206,
          "rotation": 0,
          "target": "22-ct-tum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-tang-7",
      "name": "tang 7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9297264063717865,
          "pitch": 0.04021076363587994,
          "rotation": 0,
          "target": "20-ct-7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-ct-tum",
      "name": "ct tum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2817875691037983,
          "pitch": 0.009643138130462248,
          "rotation": 0,
          "target": "23-tum"
        },
        {
          "yaw": 0.35998072950762783,
          "pitch": 0.26471672978336613,
          "rotation": 0,
          "target": "20-ct-7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-tum",
      "name": "tum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4654483358739272,
          "pitch": -0.003205099689481017,
          "rotation": 0,
          "target": "22-ct-tum"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
