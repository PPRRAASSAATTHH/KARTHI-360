var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer",
      "name": "FOYER",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.060060701953513984,
        "pitch": 0.04016769621381222,
        "fov": 1.3057070045092765
      },
      "linkHotspots": [
        {
          "yaw": -0.060060701953513984,
          "pitch": 0.04016769621381222,
          "rotation": 4.71238898038469,
          "target": "1-pooja"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-pooja",
      "name": "POOJA",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5279174900739712,
          "pitch": 0.046862312249450255,
          "rotation": 1.5707963267948966,
          "target": "0-foyer"
        },
        {
          "yaw": 0.03541182010102162,
          "pitch": 0.04360441840831086,
          "rotation": 3.141592653589793,
          "target": "2-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living",
      "name": "LIVING",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.17544047149579356,
          "pitch": 0.01445338612501601,
          "rotation": 10.995574287564278,
          "target": "3-living-searer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living-searer",
      "name": "LIVING SEARER",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 3.141592653589793,
          "target": "4-living-tv"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-living-tv",
      "name": "LIVING TV",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "KARTHI 360 TTAIL",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
