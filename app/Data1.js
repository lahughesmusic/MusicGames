const songEntries = [
  {
    id: "1",
    title: "Colors All Around",
    category: "One Hand",
    path: [
      require('./assets/Songs/Colors_All_Around_1h.jpeg')
    ],
  },
  {
    id: "3",
    title: "ABC Hop",
    category: "One Hand, 8th Notes",
    path: [
      require('./assets/Songs/ABC_Hop_1h8.jpeg')
    ],
  },


  {
    id: "6",
    title: "ABC Hop",
    category: "C Position, 8th Notes",
    path: [
      require('./assets/Songs/ABC_Hop_C8.jpeg')
    ],
  },


  {
    id: "8",
    title: "Alphabet Parade",
    category: "One Hand",
    path: [
      require('./assets/Songs/Alphabet_Parade_1h.jpeg')
    ],
  },
  {
    id: "12",
    title: "Alphabet Song",
    category: "C Position",
    path: [
      require('./assets/Songs/Alphabet_Parade_C.jpeg')
    ],
  },




  {
    id: "29",
    title: "Astronaut Bounce",
    category: "One Hand, 8th Notes",
    path: [
      require('./assets/Songs/Astronaut_Bounce_1h8.jpeg')
    ],
  },
  {
    id: "30",
    title: "Astronaut Bounce",
    category: "C Position",
    path: [
      require('./assets/Songs/Astronaut_Bounce_C.jpeg')
    ],
  },


  {
    id: "32",
    title: "Astronaut Bounce",
    category: "C Position, 8th Notes",
    path: [
      require('./assets/Songs/Astronaut_Bounce_c8.jpeg')
    ],
  },

  {
    id: "33",
    title: "Banana Pearls",
    category: "C Position, 8th Notes",
    path: [
      require('./assets/Songs/Astronaut_Bounce_c8.jpeg')
    ],
  },
  {
    id: "34",
    title: "Bark Bark Wolf",
    category: "C Position",
    path: [
      require('./assets/Songs/Bark_Bark_Wolf_C.jpeg')

    ],
  },
  {
    id: "35",
    title: "Brush Your Teeth",
    category: "C Position",
    path: [
      require('./assets/Songs/Brush_Your_Teeth_C.jpeg')

    ],
  },
  {
    id: "36",
    title: "Be My Buddy",
    category: "Middle C Position",
    path: [
      require('./assets/Songs/Be_My_Buddy_mid.jpeg')

    ],
  },
  {
    id: "37",
    title: "Bubble Party",
    category: "One Hand",
    path: [
      require('./assets/Songs/Bubble_Party_1h.jpeg')

    ],
  },
  {
    id: "46",
    title: "Bubble Party",
    category: "C Position, 8th Notes",
    path: [
      require('./assets/Songs/Bubble_Party_C8.jpeg')
    ],
  },
  {
    id: "47",
    title: "Bumblebee Bumblebee",
    category: "C Position, 8th Notes",
    path: [
      require('./assets/Songs/Bumblebee_Bumblebee_C8.jpeg')
    ],
  },
  {
    id: "48",
    title: "Bumblebee Bumblebee",
    category: "One Hand, 8th Notes",
    path: [
      require('./assets/Songs/Bumblebee_Bumblebee_1h8.jpeg')
    ],
  },
  {
    id: "49",
    title: "Clap Your Hands",
    category: "One Hand",
    path: [
      require('./assets/Songs/Clap_Your_Hands_1h.jpeg')

    ],
  },
  {
    id: "49",
    title: "Clap Your Hands",
    category: "One Hand, 8th Notes",
    path: [
      require('./assets/Songs/Clap_Your_Hands_1h8.jpeg')

    ],
  },
  {
    id: "49",
    title: "Clap Your Hands",
    category: "C Position",
    path: [
      require('./assets/Songs/Clap_Your_Hands_C.jpeg')

    ],
  },


  {
    id: "52",
    title: "Clap Your Hands",
    category: "C Position, 8th Notes",
    path: [
      require('./assets/Songs/Clap_Your_Hands_C8.jpeg')


    ],
  },
  {
    id: "53",
    title: "Clean Up Crew",
    category: "One Hand",
    path: [
      require('./assets/Songs/Clean_Up_Crew_1h.jpeg')
    ],
  },
  {
    id: "54",
    title: "Clean Up Crew",
    category: "C Position",
    path: [
      require('./assets/Songs/Clean_Up_Crew_C.jpeg')
    ],
  },
  {
    id: "65",
    title: "Colors All Around",
    category: "C Position",
    path: [
      require('./assets/Songs/Colors_All_Around_C.jpeg')

    ],
  },

  {
    id: "72",
    title: "Count To Ten",
    category: "One Hand",
    path: [
      require('./assets/Songs/Count_To_Ten_1h.jpeg')
    ],
  },


  {
    id: "75",
    title: "Count To Ten",
    category: "C Position",
    path: [
      require('./assets/Songs/Count_To_Ten_C.jpeg')
    ],
  },

  {
    id: "77",
    title: "Dance and Freeze!",
    category: "One Hand",
    path: [
      require('./assets/Songs/Dance_And_Freeze_1h.jpeg')
    ],
  },
  {
    id: "78",
    title: "Dance And Freeze",
    category: "C Position, 8th Notes",
    path: [
      require('./assets/Songs/Dance_And_Freeze_C8.jpeg')
    ],
  },
  {
    id: "79",
    title: "Dinosaur Stomp",
    category: "Middle C Position",
    path: [
      require('./assets/Songs/Dinosaur_Stomp_mid.jpeg')
    ],
  },

  {
    id: "82",
    title: "Dreamland Train",
    category: "C Position",
    path: [
      require('./assets/Songs/Dreamland_Train_C.jpeg')
    ],
  },
  {
    id: "838",
    title: "Elephant Walk",
    category: "C Position",
    path: [
      require('./assets/Songs/Elephant_Walk_C.jpeg')
    ],
  },

  {
    id: "86",
    title: "Fairy Flight",
    category: "Middle C Position",
    path: [
      require('./assets/Songs/Fairy_Flight_mid.jpeg')
    ],
  },

  {
    id: "88",
    title: "Feeling Rainbow",
    category: "One Hand",
    path: [
      require('./assets/Songs/Feeling_Rainbow_1h.jpeg')
    ],
  },
  {
    id: "90",
    title: "Feeling Rainbow",
    category: "C Position",
    path: [
      require('./assets/Songs/Feeling_Rainbow_C.jpeg')
    ],
  },
  {
    id: "91",
    title: "Flap Flap Flap You Wings",
    category: "C Position",
    path: [
      require('./assets/Songs/Flap_Flap_Flap_Your_Wings_C.jpeg')

    ],
  },
  {
    id: "95",
    title: "Gentle Rain",
    category: "Middle C Position",
    path: [
      require('./assets/Songs/Gentle_Rain_mid.jpeg')
    ],
  },

  {
    id: "96",
    title: "Getting Dressed",
    category: "One Hand",
    path: [
      require('./assets/Songs/Getting_Dressed_1h.jpeg')

    ],
  },
  {
    id: "97",
    title: "O Come All Ye Faithful",
    category: "C Position",
    path: [
      require('./assets/Songs/Getting_Dressed_C.jpeg')
    ],
  },
  {
    id: "98",
    title: "Giddy Up Pony",
    category: "C Position, 8th Notes",
    path: [
      require('./assets/Songs/Giddy_Up_Pony_C8.jpeg')
    ],
  },

  {
    id: "101",
    title: "Giggle Train",
    category: "Middle C Position, 8th Notes",
    path: [
      require('./assets/Songs/Giggle_Train_mid8.jpeg')
    ],
  },


  {
    id: "104",
    title: "Good Morning Sunshine",
    category: "Middle C Position, 8th Notes",
    path: [
      require('./assets/Songs/Good_Morning_Sunshine_mid8.jpeg')

    ],
  },
  {
    id: "105",
    title: "Goofy Goose",
    category: "One Hand",
    path: [
      require('./assets/Songs/Goofy_Goose_1h.jpeg')
    ],
  },

  {

    id: "112",
    title: "Goodnight Little Star",
    category: "Middle C Position",
    path: [
      require('./assets/Songs/Goodnight_Little_Star_mid.jpeg')
    ],
  },
  {
    id: "113",
    title: "Goofy Goose",
    category: "C Position",
    path: [
      require('./assets/Songs/Goofy_Goose_C.jpeg')
    ],
  },

  {
    id: "114",
    title: "Hands In The Air",
    category: "One Hand",
    path: [
      require('./assets/Songs/Hands_In_The_Air_1h.jpeg')
    ],
  },
  {
    id: "114",
    title: "Hands In The Air",
    category: "C Position, 8th Notes",
    path: [
      require('./assets/Songs/Hands_In_The_Air_C8.jpeg')
    ],
  },
  {
    id: "120",
    title: "Happy Sad Face",
    category: "C Position, 8th Notes",
    path: [
      require('./assets/Songs/Happy_Sad_Face_C8.jpeg')
    ],
  },

  {

    id: "122",
    title: "Hello Song",
    category: "One Hand, 8th Notes",
    path: [
      require('./assets/Songs/Hello_Song_1h8.jpeg')
    ],
  },
  {

    id: "122",
    title: "Hello Song",
    category: "C Position, 8th Notes",
    path: [
      require('./assets/Songs/Hello_Song_C8.jpeg')
    ],
  },
  {

    id: "123",
    title: "Helping Hands",
    category: "Middle C Position",
    path: [
      require('./assets/Songs/Helping_Hands_mid.jpeg')
    ],
  },

  {
    id: "124",
    title: "Hop Frog",
    category: "Middle C Position",
    path: [
      require('./assets/Songs/Hop_Frog_mid.jpeg')

    ],
  },


  {

    id: "127",
    title: "Hop, Stop, Go!",
    category: "One Hand",
    path: [
      require('./assets/Songs/Hop_Stop_Go_1h.jpeg')
    ],
  },

  {
    id: "128",
    title: "Hop, Stop, Go!",
    category: "C Position",
    path: [
      require('./assets/Songs/Hop_Stop_Go_C.jpeg')
    ],
  },

  {
    id: "129",
    title: "Hush Little Bunny",
    category: "One Hand",
    path: [
      require('./assets/Songs/Hush_Little_Bunny_1h.jpeg')
    ],
  },
  {
    id: "129",
    title: "Hush Little Pony",
    category: "C Position",
    path: [
      require('./assets/Songs/Hush_Little_Pony_C.jpeg')
    ],
  },
  {
    id: "130",
    title: "I Can Play This",
    category: "One Hand",
    path: [
      require('./assets/Songs/I_Can_Play_This_1h.jpeg')

    ],
  },
  {
    id: "131",
    title: "I Feel Brave",
    category: "One Hand",
    path: [
      require('./assets/Songs/I_Feel_Brave_1h.jpeg')
    ],
  },


  {
    id: "131",
    title: "I Feel Brave",
    category: "C Position",
    path: [
      require('./assets/Songs/I_Feel_Brave_C.jpeg')
    ],
  },
  {
    id: "129",
    title: "I Like Me",
    category: "Middle C Position, 8th Notes",
    path: [
      require('./assets/Songs/I_Like_Me_mid8.jpeg')

    ],
  },
  {
    id: "129",
    title: "I Lost My Sock",
    category: "Middle C Position",
    path: [
      require('./assets/Songs/I_Lost_My_Sock_mid.jpeg')
    ],
  },
  {
    id: "131",
    title: "I'm A Little Pickle",
    category: "One Hand",
    path: [
      require('./assets/Songs/Im_A_Little_Pickle_1h.jpeg')
    ],
  },
  {
    id: "129",
    title: "I'm A Little Pickle",
    category: "C Position",
    path: [
      require('./assets/Songs/Im_A_Little_Pickle_C.jpeg')
    ],
  },
  {
    id: "129",
    title: "Jump Like A Frog",
    category: "One Hand, 8th Notes",
    path: [
      require('./assets/Songs/Jump_Like_A_Frog_1h8.jpeg')
    ],
  },
  {
    id: "129",
    title: "Jumping Jellybeans",
    category: "Middle C Position",
    path: [
      require('./assets/Songs/Jumping_Jellybeans_mid.jpeg')
    ],
  },
  {
    id: "129",
    title: "Jungle Safari",
    category: "One Hand, 8th Notes",
    path: [
      require('./assets/Songs/Jungle_Safari_1h8.jpeg')
    ],
  },
  {
    id: "129",
    title: "Jungle Safari",
    category: "C Position, 8th Notes",
    path: [
      require('./assets/Songs/Jungle_Safari_C8.jpeg')
    ],
  },




  {
    id: "129",
    title: "Let's Be Kind",
    category: "One Hand, 8th Notes",
    path: [
      require('./assets/Songs/Lets_Be_Kind_1h8.jpeg')
    ],
  },



  {
    id: "129",
    title: "Let's Be Kind",
    category: "C Position, 8th Notes",
    path: [
      require('./assets/Songs/Lets_Be_Kind_C8.jpeg')

    ],
  },

  {
    id: "129",
    title: "Tis The Church Triumphant Singing",
    category: "C Position",
    path: [
      require('./assets/Songs/Little_Flower_C.jpeg')


    ],
  },
  {
    id: "129",
    title: "Lunch Time Song",
    category: "One Hand",
    path: [
      require('./assets/Songs/Lunchtime_Song_1h.jpeg')

    ],
  },

  {
    id: "129",
    title: "Lunch Time Song",
    category: "C Position",
    path: [
      require('./assets/Songs/Lunchtime_Song_C.jpeg')

    ],
  },
  {
    id: "129",
    title: "Magic Wand Wiggle",
    category: "One Hand, 8th Notes",
    path: [
      require('./assets/Songs/Magic_Wand_Wiggle_1h8.jpeg')

    ],
  },

  {
    id: "129",
    title: "March Of The Penguins",
    category: "C Position, 8th Notes",
    path: [
      require('./assets/Songs/March_of_the_Penguins_C8.jpeg')
    ],
  },
  {
    id: "129",
    title: "March Of The Penquins",
    category: "One Hand",
    path: [
      require('./assets/Songs/March_Of_The_Penquins_1h.jpeg')

    ],
  },

  {
    id: "129",
    title: "Monster Under My Bed",
    category: "One Hand, 8th Notes",
    path: [
      require('./assets/Songs/Monster_Under_My_Bed_1h8.jpeg')

    ],
  },


  {
    id: "129",
    title: "Monster Under My Bed",
    category: "C Position, 8th Notes",
    path: [
      require('./assets/Songs/Monster_Under_My_Bed_C8.jpeg')

    ],
  },

  {
    id: "129",
    title: "Moo Cow, Moo",
    category: "Middle C Position",
    path: [
      require('./assets/Songs/Moo_Cow_Moo_mid.jpeg')
    ],
  },


  {
    id: "129",
    title: "Moonbeam Lullaby",
    category: "C Position",
    path: [
      require('./assets/Songs/Moonbeam_Lullaby_C.jpeg')

    ],
  },


  {
    id: "129",
    title: "Just As I Am",
    category: "One Hand",
    path: [
      require('./assets/Songs/Moonbeam_Lullaby_1h.jpeg')
    ],
  },

  {
    id: "129",
    title: "My Best Friend",
    category: "One Hand",
    path: [
      require('./assets/Songs/My_Best_Friend_1h.jpeg')

    ],
  },

  {
    id: "129",
    title: "My Best Friend",
    category: "C Position",
    path: [
      require('./assets/Songs/My_Best_Friend_C.jpeg')

    ],
  },
  {
    id: "129",
    title: "My Big Feelings",
    category: "One Hand, 8th Notes",
    path: [
      require('./assets/Songs/My_Big_Feelings_1h8.jpeg')
    ],
  },
  {
    id: "129",
    title: "My Big Feelings",
    category: "C Position, 8th Notes",
    path: [
      require('./assets/Songs/My_Big_Feelings_C8.jpeg')

    ],
  },
  {
    id: "129",
    title: "My Little Ladybug",
    category: "C Position, 8th Notes",
    path: [
      require('./assets/Songs/My_Little_Ladybug_C8.jpeg')
    ],
  },
  {
    id: "129",
    title: "My Little Ladybug",
    category: "Middle C Position, 8th Notes",
    path: [
      require('./assets/Songs/My_Little_Ladybug_mid8.jpeg')

    ],
  },

  {
    id: "129",
    title: "My Name Starts With...",
    category: "One Hand",
    path: [
      require('./assets/Songs/My_Name_Starts_With..._1h.jpeg')

    ],
  },

  {
    id: "129",
    title: "My Name Starts With...",
    category: "C Position",
    path: [
      require('./assets/Songs/My_Name_Starts_With..._C.jpeg')
    ],
  },

  {
    id: "129",
    title: "Nap Time Lullaby",
    category: "One Hand",
    path: [
      require('./assets/Songs/Nap_Time_Lullaby_1h.jpeg')
    ],
  },

  {
    id: "129",
    title: "Nap Time Lullaby",
    category: "C Position",
    path: [
      require('./assets/Songs/Nap_Time_Lullaby_C.jpeg')
    ],
  },

  {
    id: "129",
    title: "One And Two",
    category: "C Position",
    path: [
      require('./assets/Songs/One_And_Two_C.jpeg')
    ],
  },
  {
    id: "129",
    title: "One, Two, Buckle My Shoe",
    category: "C Position, 8th Notes",
    path: [
      require('./assets/Songs/One_Two_Buckle_My_Shoe_C8.jpeg')
    ],
  },
  {
    id: "129",
    title: "One, Two, Buckle My Shoe",
    category: "One Hand, 8th Notes",
    path: [
      require('./assets/Songs/One_Two_Buckle_My_Shoes_1h8.jpeg')
    ],
  },
  {
    id: "129",
    title: "Pajama Dance",
    category: "One Hand",
    path: [
      require('./assets/Songs/Pajama_Dance_1h.jpeg')
    ],
  },
  {
    id: "129",
    title: "Pirates Ahoy!",
    category: "C Position, 8th Notes",
    path: [
      require('./assets/Songs/Pirates_Ahoy!_C8.jpeg')
    ],
  },
  {
    id: "129",
    title: "Pirates Ahoy!",
    category: "One Hand, 8th Notes",
    path: [
      require('./assets/Songs/Pirates_Ahoy!_1h8.jpeg')
    ],
  },
  {
    id: "129",
    title: "Princess And Dragon",
    category: "One Hand",
    path: [
      require('./assets/Songs/Princess_And_Dragon_1h.jpeg')
    ],
  },


  {
    id: "129",
    title: "Princess And Dragon",
    category: "C Position",
    path: [
      require('./assets/Songs/Princess_And_Dragon_C.jpeg')
    ],
  },

  {
    id: "129",
    title: "Pumpkin Patch",
    category: "One Hand",
    path: [
      require('./assets/Songs/Pumpkin_Patch_1h.jpeg')
    ],
  },
  {
    id: "129",
    title: "Pumpkin Patch",
    category: "C Position",
    path: [
      require('./assets/Songs/Pumpkin_Patch_C.jpeg')
    ],
  },
  {
    id: "129",
    title: "Pumpkin Patch",
    category: "C Position, 8th Notes",
    path: [
      require('./assets/Songs/Pumpkin_Patch_C8.jpeg')
    ],
  },

  {
    id: "129",
    title: "Quack Quack March",
    category: "One Hand",
    path: [
      require('./assets/Songs/Quack_Quack_March_1h.jpeg')
    ],
  },
  {
    id: "129",
    title: "Quack Quack March",
    category: "C Position",
    path: [
      require('./assets/Songs/Quack_Quack_March_C.jpeg')
    ],
  },
  {
    id: "129",
    title: "Quiet As A Mouse",
    category: "C Position, 8th Notes",
    path: [
      require('./assets/Songs/Quiet_As_A_Mouse_C8.jpeg')
    ],
  },
  {
    id: "129",
    title: "Rainbow In The Sky",
    category: "Middle C Position",
    path: [
      require('./assets/Songs/Rainbow_In_The_Sky_Mid.jpeg')
    ],
  },
  {
    id: "129",
    title: "Rainbow Numbers",
    category: "One Hand",
    path: [
      require('./assets/Songs/Rainbow_Numbers_1h.jpeg')
    ],
  },
  {
    id: "129",
    title: "Rainbow Numbers",
    category: "C Position",
    path: [
      require('./assets/Songs/Rainbow_Numbers_C.jpeg')
    ],
  },


  {
    id: "129",
    title: "Roar Like A Lion",
    category: "Middle C Position",
    path: [
      require('./assets/Songs/Roar_Like_A_Lion_mid.jpeg')
    ],
  },


  {
    id: "129",
    title: "Robot Dance",
    category: "C Position",
    path: [
      require('./assets/Songs/Robot_Dance_C.jpeg')
    ],
  },
  {
    id: "129",
    title: "Rock A Bye Rainbow",
    category: "C Position",
    path: [
      require('./assets/Songs/Rock_A_Bye_Rainbow_C.jpeg')


    ],
  },


  {
    id: "129",
    title: "Shake It Low",
    category: "Middle C Position, 8th Notes",
    path: [
      require('./assets/Songs/Shake_It_Low_mid8.jpeg')
    ],
  },
  {
    id: "129",
    title: "Shapes Are Fun",
    category: "One Hand",
    path: [
      require('./assets/Songs/Shapes_Are_Fun_1h.jpeg')
    ],
  },
  {
    id: "129",
    title: "Shapes Are Fun",
    category: "C Position",
    path: [
      require('./assets/Songs/Shapes_Are_Fun_C.jpeg')
    ],
  },
  {
    id: "129",
    title: "Sharing Song",
    category: "One Hand",
    path: [
      require('./assets/Songs/Sharing_Song_1h.jpeg')
    ],
  },

  {
    id: "129",
    title: "Sharing Song",
    category: "C Position",
    path: [
      require('./assets/Songs/Sharing_Song_C.jpeg')
    ]
  },


  {
    id: "129",
    title: "Sharing Song",
    category: "C Position, 8th Notes",
    path: [
      require('./assets/Songs/Sharing_Song_C8.jpeg')
    ],
  },
  {
    id: "129",
    title: "Shh.. Song",
    category: "Middle C Position",
    path: [
      require('./assets/Songs/Shh_Song_mid.jpeg')
    ],
  },
  {
    id: "129",
    title: "Shoes On My Feet",
    category: "One Hand, 8th Notes",
    path: [
      require('./assets/Songs/Shoes_On_My_Feet_1h8.jpeg')
    ],
  },
  {
    id: "129",
    title: "Shoes On My Feet",
    category: "C Position, 8th Notes",
    path: [
      require('./assets/Songs/Shoes_On_My_Feet_C8.jpeg')
    ],
  },
  {
    id: "129",
    title: "Silly Sandwich Song",
    category: "One Hand",
    path: [
      require('./assets/Songs/Silly_Sandwich_Song_1h.jpeg')
    ],
  },

  {
    id: "129",
    title: "Silly Sandwich Song",
    category: "C Position",
    path: [
      require('./assets/Songs/Silly_Sandwich_Song_C.jpeg')
    ],
  },

  {
    id: "129",
    title: "Sleepytime Wishes",
    category: "One Hand, 8th Notes",
    path: [
      require('./assets/Songs/Sleepytime_Wishes_1h8.jpeg')
    ],
  },

  {
    id: "129",
    title: "Sleepytime Wishes",
    category: "C Position, 8th Notes",
    path: [
      require('./assets/Songs/Sleepytime_Wishes_c8.jpeg')
    ],
  },
  {
    id: "129",
    title: "Smile Inside, You'll Shine Outside",
    category: "One Hand",
    path: [
      require('./assets/Songs/Smile_Inside_1h.jpeg')
    ],
  },


  {
    id: "129",
    title: "Smile Inside, You'll Shine Outside",
    category: "One Hand, 8th Notes",
    path: [
      require('./assets/Songs/Smile_Inside_1h8.jpeg')
    ],
  },

  {
    id: "129",
    title: "Smile Inside, You'll Shine Outside",
    category: "C Position",
    path: [
      require('./assets/Songs/Smile_Inside_C.jpeg')
    ],
  },

  {
    id: "129",
    title: "Smile Inside, You'll Shine Outside",
    category: "C Position, 8th Notes",
    path: [
      require('./assets/Songs/Smile_Inside_C8.jpeg')
    ],
  },
  {
    id: "129",
    title: "Snack Song",
    category: "One Hand",
    path: [
      require('./assets/Songs/Snack_Song_1h .jpeg')
    ],
  },
  {
    id: "129",
    title: "Snack Song",
    category: "C Position",
    path: [
      require('./assets/Songs/Snack_Song_C.jpeg')
    ],
  },
  {
    id: "129",
    title: "Space Explorer",
    category: "One Hand",
    path: [
      require('./assets/Songs/Space_Explorer_1h.jpeg')
    ],
  },

  {
    id: "129",
    title: "Space Explorer",
    category: "C Position",
    path: [
      require('./assets/Songs/Space_Explorer_C.jpeg')
    ],
  },
  {
    id: "129",
    title: "Spell My Name",
    category: "One Hand",
    path: [
      require('./assets/Songs/Spell_My_Name_1h.jpeg')
    ],
  },
  {
    id: "129",
    title: "Spell My Name",
    category: "C Position",
    path: [
      require('./assets/Songs/Spell_My_Name_C.jpeg')
    ],
  },

  {
    id: "129",
    title: "Spin Around",
    category: "Middle C Position, 8th Notes",
    path: [
      require('./assets/Songs/Spin_Around_mid8.jpeg')
    ],
  },
  {
    id: "129",
    title: "Squeaky Mouse Song",
    category: "One Hand, 8th Notes",
    path: [
      require('./assets/Songs/Squeaky_Mouse_Song_1h8.jpeg')
    ],
  },

  {
    id: "129",
    title: "Squeaky Mouse Song",
    category: "C Position, 8th Notes",
    path: [
      require('./assets/Songs/Squeaky_Mouse_Song_C8.jpeg')
    ],
  },

  {
    id: "129",
    title: "Starry Night",
    category: "Middle C Position",
    path: [
      require('./assets/Songs/Starry_Night_mid.jpeg')
    ],
  },
  {
    id: "129",
    title: "Stretch Like A Star",
    category: "C Position",
    path: [
      require('./assets/Songs/Stetch_Like_A_Star_C.jpeg')
    ],
  },

  {
    id: "129",
    title: "Sunny Day",
    category: "C Position",
    path: [
      require('./assets/Songs/Sunny_Day_C.jpeg')
    ],
  },
  {
    id: "129",
    title: "The Talking Cat",
    category: "C Position, 8th Notes",
    path: [
      require('./assets/Songs/Talking_Cat_C8.jpeg')
    ],
  },
  {
    id: "129",
    title: "Thank You Dance",
    category: "C Position",
    path: [
      require('./assets/Songs/Thank_You_Dance_C.jpeg')
    ],
  },
  {
    id: "129",
    title: "Thank You Dance",
    category: "C Position, 8th Notes",
    path: [
      require('./assets/Songs/Thank_You_Dance_C8.jpeg')
    ],
  },
  {
    id: "129",
    title: "The Talking Cat",
    category: "One Hand, 8th Notes",
    path: [
      require('./assets/Songs/The_Talking_Cat_1h8.jpeg')
    ],
  },
  {
    id: "129",
    title: "The Color Song",
    category: "C Position",
    path: [
      require('./assets/Songs/The_Color_Song_C.jpeg')
    ],
  },
  {
    id: "129",
    title: "The Meow Song",
    category: "Middle C Position, 8th Notes",
    path: [
      require('./assets/Songs/The_Meow_Song_mid8.jpeg')
    ],
  },
  {
    id: "129",
    title: "The Pajama Dance",
    category: "C Position, 8th Notes",
    path: [
      require('./assets/Songs/The_Pajama_Dance_C8.jpeg')
    ],
  },

  {
    id: "129",
    title: "The Tickle Monster",
    category: "Middle C Position, 8th Notes",
    path: [
      require('./assets/Songs/The_Tickle_Monster_mid8.jpeg')
    ],
  },
  {
    id: "129",
    title: "Time For Bed",
    category: "One Hand",
    path: [
      require('./assets/Songs/Time_For_Bed_1h.jpeg')
    ],
  },

  {
    id: "129",
    title: "Time For Bed",
    category: "C Position",
    path: [
      require('./assets/Songs/Time_For_Bed_C.jpeg')
    ],
  },

  {
    id: "129",
    title: "Tiny Turtle Time",
    category: "C Position",
    path: [
      require('./assets/Songs/Tiny_Turtle_Time_C.jpeg')
    ],
  },

  {
    id: "129",
    title: "Tiptoe Through The Garden",
    category: "One Hand",
    path: [
      require('./assets/Songs/Tiptoe_Through_The_Garden_1h.jpeg')
    ],
  },
  {
    id: "129",
    title: "Underwater Boogie",
    category: "Middle C Position, 8th Notes",
    path: [
      require('./assets/Songs/Underwater_Boogie_mid8.jpeg')
    ],
  },
  {
    id: "129",
    title: "We're All Friends",
    category: "Middle C Position",
    path: [
      require('./assets/Songs/Were_All_Friends_mid.jpeg')
    ],
  },

  {
    id: "129",
    title: "When I Feel Mad",
    category: "One Hand, 8th Notes",
    path: [
      require('./assets/Songs/When_I_Feel_Mad_1h8.jpeg')
    ],
  },
  {
    id: "129",
    title: "When I Feel Mad",
    category: "C Position, 8th Notes",
    path: [
      require('./assets/Songs/When_I_Feel_Mad_C8.jpeg')
    ],
  },

  {
    id: "129",
    title: "Wiggle Like A Worm",
    category: "C Position, 8th Notes",
    path: [
      require('./assets/Songs/Wiggle_Like_A_Worm_C8.jpeg')
    ],
  },

  {
    id: "129",
    title: "You And Me",
    category: "One Hand, 8th Notes",
    path: [
      require('./assets/Songs/You_And_Me_1h8.jpeg')
    ],
  },
  {
    id: "129",
    title: "You And Me",
    category: "C Position, 8th Notes",
    path: [
      require('./assets/Songs/You_And_Me_C8.jpeg')
    ],
  },
  {
    id: "129",
    title: "You Can Play Too",
    category: "One Hand, 8th Notes",
    path: [
      require('./assets/Songs/You_Can_Play_Too_1h8.jpeg')
    ],
  },

  {
    id: "129",
    title: "You Can Play Too",
    category: "C Position, 8th Notes",
    path: [
      require('./assets/Songs/You_Can_Play_Too_C8.jpeg')
    ],
  },
  {
    id: "129",
    title: "Zoo Time",
    category: "C Position",
    path: [
      require('./assets/Songs/Zoo_Time_C.jpeg')
    ],
  },
  {
    id: "129",
    title: "Yoyo",
    category: "Middle C Position, 8th Notes",
    path: [
      require('./assets/Songs/Yoyo_mid8.jpeg')
    ],
  },
];

export default songEntries;




