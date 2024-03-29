export class Project {
  constructor (data) {
    this.id = data.id || data._id
    this.title = data.title
    this.coverImg = data.coverImg
    this.creatorId = data.creatorId
    this.projectImgs = data.projectImgs
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.creator = data.creator
  }
}

const projectData = {
  "_id": "653ab11a8764f89ed661379c",
  "title": "Cats UPS",
  "coverImg": "https://catsups.herokuapp.com/assets/img/bg/Cups-room-iso.png",
  "creatorId": "653955ee270c9d4bb743829b",
  "projectImgs": [
    "https://catsups.herokuapp.com/assets/img/bg/Cups-room-cup.png",
    "https://catsups.herokuapp.com/assets/img/bg/Cups-Warehouse.png",
    "https://catsupssources.blob.core.windows.net/items/Herbert.png",
    "https://catsupssources.blob.core.windows.net/items/KiwiPlush.png",
    "https://catsupssources.blob.core.windows.net/items/Oslo.png"
  ],
  "createdAt": "2023-10-26T18:34:02.299Z",
  "updatedAt": "2023-10-26T18:34:02.299Z",
  "__v": 0,
  "creator": {
    "_id": "653955ee270c9d4bb743829b",
    "subs": [
      "auth0|653955ed24ee6ee2b5f99de3"
    ],
    "email": "neonblizzard@twitch.tv",
    "name": "Neon Blizzard",
    "picture": "https://media.tenor.com/OTvrvx1CQfwAAAAC/azuki-ashchild.gif",
    "bio": "Neon Blizzard, a master katana wielder and cryomancer, is a legendary warrior whose true identity remains a secret. Born in a remote, snow-covered village, she wields an enchanted ice crystal katana, her blade glowing with an eerie blue light, and possesses the unique ability to command blizzards. When snow falls and winds howl, she becomes an unstoppable force, using her cryomantic powers to conceal her movements, disorient her foes, and freeze them with her chilling energy. Beyond combat, she shapes ice sculptures and protective barriers and heals with her powers. Neon Blizzard is a protector of the weak, a mysterious figure whose legend grows with each blizzard she conjures, and a formidable force for justice and peace.",
    "coverImg": "https://img.wattpad.com/8c505fbd0546bcf4008ecd060828a9b8e8a74717/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f2d364e45736b54746e56426449673d3d2d313033333533363438382e313636613362616565353961363339663139363336323138383934332e676966",
    "github": "https://github.com/blizzard",
    "linkedin": "https://linkedin.com",
    "resume": "https://linkedin.com",
    "class": "Summer 23'",
    "graduated": true,
    "createdAt": "2023-10-25T17:52:55.787Z",
    "updatedAt": "2023-10-30T15:42:57.347Z",
    "__v": 0,
    "id": "653955ee270c9d4bb743829b"
  },
  "id": "653ab11a8764f89ed661379c"
}