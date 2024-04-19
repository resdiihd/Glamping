var APP_DATA = {
  "scenes": [
    {
      "id": "0-sn-khu-ln",
      "name": "sân khấu lớn",
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
        "yaw": -0.14489890867803012,
        "pitch": -0.07084922029514829,
        "fov": 1.3847873111060733
      },
      "linkHotspots": [
        {
          "yaw": 3.105500836254576,
          "pitch": 0.029455896066759024,
          "rotation": 0,
          "target": "1-sn-chnh"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sn-chnh",
      "name": "Sân chính",
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
        "yaw": 0.09142200843780302,
        "pitch": -0.022952275874690287,
        "fov": 1.3847873111060733
      },
      "linkHotspots": [
        {
          "yaw": 0.022696948051283528,
          "pitch": -0.0754203982932804,
          "rotation": 0,
          "target": "0-sn-khu-ln"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ng-ln-sn-chnh",
      "name": "đường lên sân chính",
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
          "yaw": 1.7772646756829245,
          "pitch": -0.16658256679671268,
          "rotation": 0,
          "target": "1-sn-chnh"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-khu-tri-l",
      "name": "khu trại lẻ",
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
          "yaw": 1.0347263680416354,
          "pitch": 0.05765787510248188,
          "rotation": 0,
          "target": "2-ng-ln-sn-chnh"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-khu-cu-lu-nhm",
      "name": "khu cầu lều nhóm",
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
          "yaw": -1.7534390101928707,
          "pitch": -0.061252790441482574,
          "rotation": 0,
          "target": "1-sn-chnh"
        },
        {
          "yaw": 1.3639336715702992,
          "pitch": 0.061006161603962994,
          "rotation": 0,
          "target": "3-khu-tri-l"
        },
        {
          "yaw": 2.2987215098198455,
          "pitch": 0.16881029301495687,
          "rotation": 0,
          "target": "2-ng-ln-sn-chnh"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-sn-l-tn",
      "name": "sân lễ tân",
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
          "yaw": -0.2507710171919655,
          "pitch": -0.1394848882159394,
          "rotation": 0,
          "target": "3-khu-tri-l"
        },
        {
          "yaw": 0.13431416366734794,
          "pitch": -0.13906440261836828,
          "rotation": 0,
          "target": "2-ng-ln-sn-chnh"
        },
        {
          "yaw": -2.8823149909216728,
          "pitch": 0.061294317930451925,
          "rotation": 0,
          "target": "6-t-cng-ln-sn-l-tn"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-t-cng-ln-sn-l-tn",
      "name": "từ cổng lên sân lễ tân",
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
          "yaw": -2.6139667557694732,
          "pitch": -0.0078208563775366,
          "rotation": 0,
          "target": "7-sn-ng-bo-c-tu"
        },
        {
          "yaw": -0.9449558782348753,
          "pitch": -0.23231590367842614,
          "rotation": 0,
          "target": "5-sn-l-tn"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-sn-ng-bo-c-tu",
      "name": "sân đồng bào cơ tu",
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
          "yaw": 2.4700463945518596,
          "pitch": -0.13345807191888603,
          "rotation": 0,
          "target": "6-t-cng-ln-sn-l-tn"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-68-park-hills",
      "name": "68 park hills",
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
          "yaw": 0.9106090496759389,
          "pitch": -0.18048129256144918,
          "rotation": 0,
          "target": "9-68-park-hill-rng-da"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-68-park-hill-rng-da",
      "name": "68 park hill rừng dừa",
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
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "10-boro",
      "name": "boro",
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
      "linkHotspots": [],
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
