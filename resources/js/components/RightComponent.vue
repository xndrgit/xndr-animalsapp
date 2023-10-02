<template>
    <div class="container-right">
        <div class="header-right">
            <div :class="viewProfile ? 'activeProfile': '' " class="user-image" @click="viewProfileFunction()">
                <img :alt="contactsGift[activeChatGift].name" :src="contactsGift[activeChatGift].avatar" class="cover">
            </div>
            <h4 class="activeName">{{ contactsGift[activeChatGift].name }}</h4>
            <div class="nav-icons">
                <i v-if="!settings" class="ml-2 fa-lg fa fa-solid fa-gear" @click="handleSettings"></i>
                <i v-if="settings" class="ml-2 fa-lg fa fa-regular fa-circle-xmark fa-fade" @click="handleSettings"></i>
                <div v-if="settings" :class="settings ? 'active' : ''" class="settings">
                    <ul>
                        <li @click="clearChat(activeChatGift)">Clear Chat</li>
                        <li><a href="https://github.com/XanderWorld/laravel7-spiderapp-XanderWilde">Repository</a>
                        </li>
                        <li><a href="https://github.com/xndrgit">Git</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div v-if="viewProfile"
             :style="{ background: `url(${contactsGift[activeChatGift].avatar})` }" class="img-profile">
            <div v-if="viewProfile" class="remove-img-profile" @click="removeProfileFunction">
                <i class="fa fa-solid fa-circle-xmark fa-fade"></i>
            </div>
        </div>
        <div v-if="viewFormGift" class="boxNewAnimal">
            <div class="manage-top">
                <div class="manage-img">
                    <img alt="logo" class="img-fluid cover" src="../../../public/assets/logoplus.jpg">
                </div>
            </div>
            <!--            <form ref="formNewAnimal" class="formNewAnimal" @submit.prevent="handleSubmit">-->
            <!--                <h6 class="newLabel text-danger">{{ errorMessage }}</h6>-->
            <!--                <input id="newName" v-model="formName" class="newName" name="text"-->
            <!--                       pattern="Pucho"-->
            <!--                       placeholder="Name your animal"-->
            <!--                       required-->
            <!--                       type="text"-->
            <!--                       @keyup.enter="handleSubmit"-->
            <!--                />-->
            <!--                &lt;!&ndash;                <h2 class="newLabel">Insert URL Image</h2>&ndash;&gt;-->
            <!--                <input id="newUrl" v-model="formUrl" class="newUrl" name="url"-->
            <!--                       pattern="https://.*"-->
            <!--                       placeholder="https://example.com"-->
            <!--                       required-->
            <!--                       type="url"-->
            <!--                       @keyup.enter="handleSubmit"-->
            <!--                />-->
            <!--                <i class="fa fa-2x fa-solid fa-paper-plane" @click.prevent="handleSubmit"></i>-->
            <!--            </form>-->

            <div class="manage-down">
                <div class="div-search">
                    <input
                        v-model="searchInput"
                        class="input-search"
                        placeholder="Search for an animal"
                        type="text"
                        @keyup="searchContact(searchInput)"
                    />
                    <i class="fa-brands fa-searchengin fa-bounce" @click="searchContact(searchInput)"></i>
                </div>
            </div>

            <div class="manage-content">
                <div class="manage-content-up">
                    <div v-for="(element, index) in contactsGift" v-if="element.active" :key="index.element"
                         class="cover-animal boxs-green" @click="handleActive(index)">
                        <img :src="element.avatar" alt="cover-animal" class=" img-fluid">
                    </div>
                    <div v-for="(element, index) in contactsGift" v-if="!element.active" :key="index.element"
                         class="cover-animal boxs-red" @click="handleActive(index)">
                        <img :src="element.avatar" alt="cover-animal" class=" img-fluid">
                    </div>
                </div>
                <div class="manage-content-down">

                </div>

            </div>


        </div>

        <div ref="chatBox" :class="viewProfile ? 'bg-light': '' " class="chat-box">
            <div v-for="(message, index) in contactsGift[activeChatGift].messages" :key="index" ref="message"
                 :class="(message.status === 'sent') ? 'justify-content-end' : 'justify-content-start'" class="message"
            >
                <div :class="(message.status === 'sent') ? 'my-message' : 'friend-message'">
                    <p class="txt-message-normal">{{ message.message }} <br> <span
                        :class="(message.status === 'sent') ? 'my-time' : 'friend-time'">{{ message.date }}</span></p>
                    <i class="fa fa-solid fa-circle-xmark " @click="removeMessageFunction(index)"></i>
                </div>
            </div>
        </div>
        <div v-if="typing" class="typing d-flex align-items-center">
            <div class="justify-content-start">
                <div class="friend-message">
                    <p class="txt-message-normal">{{ contactsGift[activeChatGift].name }} is typing <i
                        class="pl-1 fa-2 fa-regular fa-comment-dots fa-bounce"></i></p>
                </div>
            </div>
        </div>
        <div class="footer-right">
            <div class="first">
                <i class="fa mr-3 fa-regular fa-face-smile" @click="handleEmojis"></i>
                <!--                <i class="fa fa-solid fa-paperclip"></i>-->

                <div v-if="emojis" :class="emojis ? 'active': '' " class="emojis-header">
                    <input id="searchEmojis" v-model="emojiInput" v-focus
                           name="searchEmojis" placeholder="Search an emoji" type="text"
                           @keyup.enter="searchEmojis(emojiInput)">
                </div>
                <div v-if="emojis" :class="emojis ? 'active': '' " class="emojis">
                    <div v-for="emoji in emojisArray" :key="emoji.id" class="emoji" @click="addEmojiInput(emoji)">
                        {{ emoji.character }}
                    </div>
                </div>

            </div>
            <div class="second">
                <input id="search" ref="search" v-model="newMsgInput" v-focus
                       name="search" placeholder="Type a message" type="text" @keyup.enter="addNewMessage(newMsgInput)">
            </div>
            <div class="third">
                <i class="fa fa-regular fa-paper-plane" @click="addNewMessage(newMsgInput)"></i>
                <!--                <i class="fa fa-solid fa-microphone-slash"></i>-->
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment";
import axios from "axios";

export default {
    directives: {
        focus: {
            // When the bound element is inserted into the DOM...
            inserted: function (el) {
                // Focus the element
                el.focus();
            }
        }
    },
    mounted() {
        console.log('Component right mounted.');
        this.getEmojis();
        this.scrollDown();

    },
    props: {
        contactsGift: Array,
        activeChatGift: Number,
        userGift: Object,
        viewFormGift: Boolean,
    },
    watch: {
        activeChatGift(newVal, oldVal) {
            //  This ensures that the scrollHeight of the chatBox element has been updated before the scrollDown() function is called.
            this.$nextTick(() => {
                this.scrollDown();
                this.typing = false;
                this.emojis = false;
            });
        }
    },
    data: function () {
        return {
            newMsg: null,
            newBotMsg: null,


            dogMsg: ["Wag its tail like a helicopter 🚁", "Bark loudly to let you know who's boss 😎", "Sniff around curiously like a detective 🔍", "Roll over for belly rubs like a drama queen 👑", "Give you puppy dog eyes that would melt an iceberg 🥺", "Chase its tail in circles like it's auditioning for the circus 🎪", "Play fetch like it's competing for the Olympics 🏆", "Cuddle with you like a fluffy teddy bear 🧸", "Lick your face like it's the tastiest thing on the planet 😛", "Howl at the moon like a werewolf 🌕", "Dig in the dirt like a construction worker 🚧", "Take a nap like it's training for a sleep marathon 💤", "Protect its owner like a secret service agent 👮‍♀️", "Jump up to greet you like a kangaroo 🦘", "Play tug-of-war like it's a battle for world domination 🌎", "Fetch a stick like it's on a mission to save the world 🌍", "Sit on command like a trained ninja 🥋", "Paw at your leg for attention like a diva 👠", "Whine when it wants something like a spoiled child 🍼", "Snuggle up in your lap like it's the coziest place on earth 🛋️", "Explore the outdoors like it's on a safari adventure 🐾", "Run and play with other dogs like it's a party all day every day 🎉", "Learn new tricks like it's the next Einstein 🧠", "Chew on a bone like it's a Michelin-starred meal 🍖", "Play hide-and-seek like it's a game of espionage 🕵️", "Do a happy dance like it's won the lottery 💰", "Sniff out treats like it's a gourmet chef 👨‍🍳", "Greet you with a toy like it's a gift from the gods 🎁", "Wiggle its butt in excitement like it's on a trampoline 🤸", "Nuzzle your hand for pets like it's in love 💕", "Sneak up for a surprise kiss like it's a smooth operator 😘", "Curl up in a cozy bed like it's royalty 👑", "Watch TV with you like it's a film critic 🎬", "Happily follow you anywhere like it's your biggest fan 📣", "Show off its new haircut like it's a supermodel 💇‍♀️", "Join in on family activities like it's a party animal 🥳", "Comfort you when you're sad like it's a therapist 🧘", "Celebrate your return home like it's a national holiday 🎉", "Tilt its head in confusion like it's a philosopher 🤔", "Enjoy car rides like it's a race car driver 🏎️", "Protect and play with children like it's a guardian angel 👼", "Show off its goofy side like it's a comedian 🤪", "Be your loyal companion for life like it's a soulmate ❤️"],
            puchoMsg: ["Hop around playfully like a kangaroo 🦘", "Nibble on hay like it's a food connoisseur 🍽️", "Thump its foot to warn others like a boss 👊", "Groom itself with its tongue like a self-care guru 💆‍♀️", "Binky (jump and twist in mid-air) like it's in a dance-off competition 🕺", "Dig a burrow like it's on a mission to China 🛫", "Chew on a cardboard box like it's the finest cuisine 🍱", "Flop over for a nap like it's the sleep champion of the world 💤", "Lick its paws clean like a cleanliness freak 🧹", "Beg for treats like a master manipulator 🍪", "Show off its agility by jumping over obstacles like a ninja 🥷", "Bite at toys like a fierce warrior 🗡️", "Explore its surroundings like a curious detective 🔎", "Nuzzle its soft fur against your hand like a cuddly teddy bear 🧸", "Nudge you for attention like a smooth operator 😏", "Bite at your clothing like a fashion critic 👗", "Wiggle its nose in curiosity like a detective on a case 🤔", "Stretch out its long legs like a yoga practitioner 🧘", "Run and play with other rabbits like a wild child 🤪", "Climb onto your lap for pets like it's the king of the castle 🐰", "Thump its back legs in excitement like it's a rockstar 🤘", "Show off its cute bunny hops like it's at a dance party 🎉", "Enjoy a carrot or piece of fruit like it's a gourmet chef 👨‍🍳", "Hide in a cozy spot like it's the ultimate hide-and-seek champion 🏆", "Cuddle up with a stuffed animal like it's a hopeless romantic ❤️", "Lunge and dart around when it's excited like a superhero in action 🦸", "Nap in a sunbeam like it's on a tropical vacation 🌴", "Sit up on its hind legs like it's a meerkat on guard duty 🦡", "Play hide-and-seek like it's playing a game of espionage 🕵️‍♀️", "Snuggle up with its companion like it's in a rom-com movie 🎬", "Greet you with a nose touch like it's a secret handshake 👋", "Enjoy a gentle brushing like it's getting a spa treatment 💆‍♂️", "Curious about new sights and sounds like a traveler in a foreign land 🗺️", "Show off its big ears like it's a fashion icon 👂", "Hop up to get a better view like it's a photographer on a mission 📷", "Jump into a cardboard box like it's a kid in a ball pit 🎾", "Be your loving and cuddly friend for life like it's your soulmate ❤️"],
            cowMsg: ["Moo happily like a diva in a concert 🎤", "Graze in a meadow like a foodie in a fancy restaurant 🍽️", "Lick its calf affectionately like a doting parent 👩‍👧", "Chew its cud like a philosopher contemplating the meaning of life 🤔", "Sniff around curiously like a detective on a case 🔍", "Rub against a scratching post like a cat in a scratching frenzy 😼", "Nuzzle its nose into your hand like it's in love 💕", "Toss its head playfully like a model on a runway 💃", "Lay down in the sun like a beach bum 🏖️", "Swish its tail to shoo away flies like a boss 👊", "Chase after its herd mates like a kid in a playground 🤪", "Drink from a cool stream like a thirsty traveler 🥤", "Roll around on a grassy hill like a child in a park 🌳", "Snort in satisfaction like a contented snorer 😴", "Groom its coat with its tongue like a cleanliness freak 🧼", "Enjoy a back scratch like a luxury spa customer 💆‍♀️", "Explore its surroundings like an adventurer on a mission 🗺️", "Nudge you for attention like a master manipulator 👀", "Play with a ball or toy like a kid in a toy store 🧸", "Walk calmly on a lead like a well-trained pet 🐶", "Stretch its legs after a nap like a yoga enthusiast 🧘‍♀️", "Lounge in a comfortable spot like a couch potato 🛋️", "Chew on a hay bale like a gourmet chef enjoying a fancy meal 🍴", "Watch over its young like a guardian angel 👼", "Sniff out treats hidden in the grass like a treasure hunter 🕵️‍♂️", "Take a nap in the shade like a sunbather seeking refuge 🌞", "Show off its impressive horns like a proud trophy winner 🏆", "Enjoy a good belly rub like a happy puppy 🐾", "Swim in a pond like a mermaid in the ocean 🧜‍♀️", "Greet you with a friendly moo like a welcoming host 👋", "Playfully head-butt its herd mates like a wrestler getting ready for a match 🤼", "Wander through a field like a lost tourist 🚶", "Take a leisurely stroll like a retiree enjoying life 🚶‍♀️", "Show off its beautiful markings like a model on a catwalk 🐄", "Be your loyal and gentle companion for life like a forever friend ❤️"],
            sheepMsg: ["Baa happily like a popstar in a concert 🎵", "Graze on lush grass like a foodie at a fancy restaurant 🍴", "Snuggle with its lamb like a doting parent 👩‍👧", "Wag its tail like a happy puppy 🐶", "Chew on a tuft of wool like a fashion critic 🧥", "Show off its thick fleece like a model on a runway 💃", "Nuzzle its nose into your hand like it's in love 💕", "Rub its head against a fence post like a cat in a scratching frenzy 😼", "Skip and jump playfully like a kid in a playground 🤸‍♀️", "Rest in a sunny spot like a beach bum 🏖️", "Shake off water after a rain like a dog after a bath 🐕", "Herd with its flock mates like a boss 👊", "Drink from a babbling brook like a thirsty traveler 🥤", "Roll around in a patch of clover like a child in a park 🌼", "Groom its wool with its tongue like a cleanliness freak 🧼", "Climb up a hill like a mountaineer 🧗‍♀️", "Explore its surroundings like an adventurer on a mission 🗺️", "Nudge you for attention like a master manipulator 👀", "Play with a toy or ball like a kid in a toy store 🧸", "Walk calmly on a lead like a well-trained pet 🐾", "Stretch its legs after a nap like a yoga enthusiast 🧘‍♀️", "Lounge in a comfortable spot like a couch potato 🛋️", "Bounce around like a lamb like a wild child 🤪", "Watch over its young like a guardian angel 👼", "Sniff out treats hidden in the grass like a treasure hunter 🕵️‍♂️", "Take a nap in the shade like a sunbather seeking refuge 🌞", "Show off its impressive horns like a proud trophy winner 🏆", "Enjoy a good belly rub like a happy puppy 🐾", "Greet you with a friendly baa like a welcoming host 👋", "Playfully head-butt its flock mates like a wrestler getting ready for a match 🤼", "Wander through a meadow like a lost tourist 🚶", "Take a leisurely stroll like a retiree enjoying life 🚶‍♀️", "Show off its beautiful markings like a model on a catwalk 🐑", "Be your gentle and faithful companion for life like a forever friend ❤️"],
            giraffeMsg: ["Baa happily like a popstar in a concert 🎵", "Graze on lush grass like a foodie at a fancy restaurant 🍴", "Snuggle with its lamb like a doting parent 👩‍👧", "Wag its tail like a happy puppy 🐶", "Chew on a tuft of wool like a fashion critic 🧥", "Show off its thick fleece like a model on a runway 💃", "Nuzzle its nose into your hand like it's in love 💕", "Rub its head against a fence post like a cat in a scratching frenzy 😼", "Skip and jump playfully like a kid in a playground 🤸‍♀️", "Rest in a sunny spot like a beach bum 🏖️", "Shake off water after a rain like a dog after a bath 🐕", "Herd with its flock mates like a boss 👊", "Drink from a babbling brook like a thirsty traveler 🥤", "Roll around in a patch of clover like a child in a park 🌼", "Groom its wool with its tongue like a cleanliness freak 🧼", "Climb up a hill like a mountaineer 🧗‍♀️", "Explore its surroundings like an adventurer on a mission 🗺️", "Nudge you for attention like a master manipulator 👀", "Play with a toy or ball like a kid in a toy store 🧸", "Walk calmly on a lead like a well-trained pet 🐾", "Stretch its legs after a nap like a yoga enthusiast 🧘‍♀️", "Lounge in a comfortable spot like a couch potato 🛋️", "Bounce around like a lamb like a wild child 🤪", "Watch over its young like a guardian angel 👼", "Sniff out treats hidden in the grass like a treasure hunter 🕵️‍♂️", "Take a nap in the shade like a sunbather seeking refuge 🌞", "Show off its impressive horns like a proud trophy winner 🏆", "Enjoy a good belly rub like a happy puppy 🐾", "Greet you with a friendly baa like a welcoming host 👋", "Playfully head-butt its flock mates like a wrestler getting ready for a match 🤼", "Wander through a meadow like a lost tourist 🚶", "Take a leisurely stroll like a retiree enjoying life 🚶‍♀️", "Show off its beautiful markings like a model on a catwalk 🐑", "Be your gentle and faithful companion for life like a forever friend ❤️"],

            newMsgInput: '',
            emojiInput: null,
            emojiToken: 'e4315be7208530ab89d89bb069d8baf721fffc9e',

            emojisArray: [],

            viewProfile: false,

            typing: false,

            settings: false,
            emojis: false,

            // viewNewAnimal: this.viewFormGift,
            formName: "",
            formUrl: "",
            errorMessage: "",
        }
    },

    methods: {
        scrollDown() {
            const chatBox = this.$refs.chatBox;
            const scrollTop = chatBox.scrollHeight;

            chatBox.scrollTo({
                top: scrollTop,
                left: 0,
                behavior: 'smooth'
            });
        },

        addNewMessage(messageContent) {
            if (messageContent.length > 0) {
                this.newMsg = {
                    date: moment().format('D/M/YY, HH:mm:ss'),
                    message: messageContent.trim(),
                    status: 'sent',
                }
                this.$emit('newMsg', this.newMsg);
                this.newMsgInput = '';
                this.emojis = false;

                const currentChat = this.activeChatGift;

                this.replyBotFunction(currentChat);

                //  This ensures that the scrollHeight of the chatBox element has been updated before the scrollDown() function is called.
                this.$nextTick(() => {
                    this.scrollDown();
                });

            }
        },
        replyBotFunction(active) {

            this.typing = true;


            let intervalId = setInterval(() => {

                if (active === 0) {
                    console.log(`pre message index: ${active}`);
                    const randomIndex = Math.floor(Math.random() * this.dogMsg.length);
                    this.newBotMsg = {
                        date: moment().format('D/M/YY, HH:mm:ss'),
                        message: `Wof! ${this.dogMsg[randomIndex]}`,
                        status: 'received',
                    }
                    this.$emit('dogMsg', this.newBotMsg);
                    this.newBotMsg = null;
                    this.$emit('dogAct', active);
                    console.log(`emited: ${active}`);

                } else if (active === 1) {
                    console.log(`pre message index: ${active}`);
                    const randomIndex = Math.floor(Math.random() * this.puchoMsg.length);
                    this.newBotMsg = {
                        date: moment().format('D/M/YY, HH:mm:ss'),
                        message: `Grrr! ${this.puchoMsg[randomIndex]}`,
                        status: 'received',
                    }
                    this.$emit('puchoMsg', this.newBotMsg);
                    this.newBotMsg = null;
                    this.$emit('PuchoAct', active);
                    console.log(`emited: ${active}`);
                } else if (active === 2) {
                    console.log(`pre message index: ${active}`);
                    const randomIndex = Math.floor(Math.random() * this.cowMsg.length);
                    this.newBotMsg = {
                        date: moment().format('D/M/YY, HH:mm:ss'),
                        message: `Muuu! ${this.dogMsg[randomIndex]}`,
                        status: 'received',
                    }
                    this.$emit('cowMsg', this.newBotMsg);
                    this.newBotMsg = null;
                    this.$emit('CowAct', active);
                    console.log(`emited: ${active}`);
                } else if (active === 3) {
                    console.log(`pre message index: ${active}`);
                    const randomIndex = Math.floor(Math.random() * this.sheepMsg.length);
                    this.newBotMsg = {
                        date: moment().format('D/M/YY, HH:mm:ss'),
                        message: `Beee! ${this.sheepMsg[randomIndex]}`,
                        status: 'received',
                    }
                    this.$emit('sheepMsg', this.newBotMsg);
                    this.newBotMsg = null;
                    this.$emit('SheepAct', active);
                    console.log(`emited: ${active}`);
                } else if (active === 4) {
                    console.log(`pre message index: ${active}`);
                    const randomIndex = Math.floor(Math.random() * this.giraffeMsg.length);
                    this.newBotMsg = {
                        date: moment().format('D/M/YY, HH:mm:ss'),
                        message: `Meee! ${this.giraffeMsg[randomIndex]}`,
                        status: 'received',
                    }
                    this.$emit('giraffeMsg', this.newBotMsg);
                    this.newBotMsg = null;
                    this.$emit('giraffeAct', active);
                    console.log(`emited: ${active}`);
                }
                clearInterval(intervalId);
                this.typing = false;

                //  This ensures that the scrollHeight of the chatBox element has been updated before the scrollDown() function is called.
                this.$nextTick(() => {
                    this.scrollDown();
                });
            }, 6000);


        },

        viewProfileFunction() {
            this.viewProfile = !this.viewProfile;
        },
        removeProfileFunction() {
            return this.viewProfile = false;
        },

        removeMessageFunction(index) {
            this.$emit('index', index);
        },
        clearChat(activeChat) {
            const messagesLength = this.contactsGift[activeChat].messages.length;
            console.log(messagesLength);

            if (messagesLength) {
                // Show a confirmation dialog to the user
                if (confirm("Are you sure you want to clear this chat?")) {
                    // Emit the 'activeChatDelete' event with the active chat as the payload
                    this.$emit('activeChatDelete', activeChat);
                }
            } else {
                // Display a message to the user indicating that the chat is already cleared
                alert("This chat is already cleared.");
            }

            this.settings = false;
        },

        handleSettings() {
            this.settings = !this.settings;
        },
        handleEmojis() {
            this.emojis = !this.emojis;
            this.getEmojis();
            this.emojiInput = null;
        },

        getEmojis() {
            axios.get(`https://emoji-api.com/emojis?access_key=${this.emojiToken}`)
                .then(response => {
                    if (response.data) {
                        this.emojisArray = response.data;
                        console.log(this.emojisArray);
                    } else {
                        console.error('Response data is empty');
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        },

        searchEmojis(arg) {
            axios.get(`https://emoji-api.com/emojis?search=${arg}&access_key=${this.emojiToken}`)
                .then(response => {
                    if (response.data) {
                        this.emojisArray = response.data;
                        console.log(this.emojisArray);
                    } else {
                        console.error('Response data is empty');
                        this.emojisArray = [];
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        },


        addEmojiInput(emoji) {
            this.newMsgInput += emoji.character;
            // here's an example of how you can modify your addEmojiInput function to focus the input after adding the emoji
            this.$nextTick(() => {
                this.$refs.search.focus();
            });
        },

        handleSubmit(event) {
            // Check if name is an empty string or formUrl is not a valid URL
            if (this.formName.trim() === '') {
                this.errorMessage = 'Please enter a name for the animal.';
            } else if (!this.isValidUrl(this.formUrl)) {
                this.errorMessage = 'Please enter a valid URL for the animal image.';
            } else {
                // Reset the error message if there are no errors
                this.errorMessage = '';

                // Create the new contact object
                this.newContact = {
                    name: this.formName,
                    avatar: this.formUrl,
                    visible: true,
                    messages: [],
                };

                // Emit the "newContact" event to notify the parent component
                this.$emit("newContact", this.newContact);

                // Clear the form fields after successful submission
                this.formName = '';
                this.formUrl = '';
            }
        },
        isValidUrl(url) {
            // Use a regular expression to check if the URL is valid
            // You can replace this with a more robust URL validation method if needed
            const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
            return urlRegex.test(url);
        },
        // handleSubmitClick(event){
        //     this.$refs.formNewAnimal.submit();
        //     // this.formName = "";
        //     // this.formUrl = "";
        //     // this.viewFormGift = !this.viewFormGift;
        // }
        handleActive(index) {
            this.contactsGift[index].active = !this.contactsGift[index].active;
        },

    }
}
</script>


<style lang="scss" scoped>

.container-right:before {
    position: absolute;

    top: 60px;
    left: 0;
    width: 100%;
    height: calc(100% - 120px);


    content: "";


    background: url("/assets/logo.png");
    background-repeat: no-repeat;
    background-position: center;
}
.container-right {
    position: relative;

    flex: 70%;
    background: #000000;

    .header-right {
        height: 60px;
        background: #f6f6f6;

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0 10px;

        .user-image {
            position: relative;

            height: 40px;
            width: 40px;

            border-radius: 50%;

            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

            cursor: pointer;

            transition: 0.1s;
            background: #f6f6f6;
        }

        .activeProfile {
            border: 2px solid #05fa6f;
        }

        .activeName {
            margin: 0;
            font-weight: bolder;
            text-transform: uppercase;
        }

        .nav-icons {
            font-size: 1rem;
            position: relative;

            .settings {
                position: absolute;

                background: white;

                width: 200px;
                right: 10px;
                top: 50px;

                border-radius: 5px;
                box-shadow: 5px 5px #f97624;

                z-index: 9;
                transition: opacity 1s;


                ul {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    list-style: none;

                    padding: 0 1rem;

                    li {
                        cursor: pointer;
                        width: 200px;
                        padding-left: 20px;
                        border-radius: 5px;
                        color: black;

                        &:hover {
                            background: #fbd4ae;
                        }
                    }

                    a {
                        text-decoration: none;
                        text-underline: none;
                        color: black;

                        &:hover {
                        }
                    }
                }
            }

            .active {
                opacity: 1;
            }

            .fa {
                cursor: pointer;
            }
        }
    }

    .boxNewAnimal {
        z-index: 10;
        position: absolute;
        top: 1px;
        left: 0;
        width: 100%;
        height: calc(100% - 0px);
        background: white;
        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;

        .manage-top {
            position: absolute;
            top: 0;
            left: 0;

            height: 60px;
            width: 100%;
            background: #f6f6f6;

            display: flex;
            justify-content: center;
            align-items: center;

            .manage-img {
                position: relative;
                height: 40px;
                width: 40px;
                border-radius: 50%;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            }
        }

        .manage-down {
            position: absolute;
            top: 60px;
            left: 0;

            height: 50px;
            width: 100%;
            background: #f6f6f6;

            display: flex;
            justify-content: center;
            align-items: center;

            padding: 0 15px;
        }

        .manage-content {
            position: absolute;
            bottom: 0;

            width: 100%;
            height: calc(100% - 110px);

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;


            padding: 2rem;

            .cover-animal {
                border-radius: 50%;
                -o-object-fit: cover;
                object-fit: cover;
                height: 80px;
                width: 80px;
                padding: 1.4rem;
                margin: 2rem;
                cursor: pointer;
                transition: 0.1s;
            }

            .manage-content-up {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

                height: 100%;
                width: 100%;
                overflow-y: auto;
            }

            //.manage-content-down {
            //    display: flex;
            //    flex-wrap: wrap;
            //    justify-content: space-between;
            //
            //    height: 50%;
            //    width: 100%;
            //    overflow-y: auto;
            //}
        }

        //.formNewAnimal {
        //    display: flex;
        //    flex-direction: column;
        //    justify-content: center;
        //    align-items: center;
        //
        //    //.newLabel{
        //    //    color: red;
        //    //    font-size: 100px;
        //    //    font-weight: bold;
        //    //    margin: 0 0 24px;
        //    //    text-align: center;
        //    //}
        //
        //    #newUrl,
        //    #newName {
        //        /* Box model */
        //        box-sizing: border-box;
        //        width: 200px;
        //        height: 40px;
        //        padding: 15px;
        //        margin-bottom: 20px;
        //
        //        /* Typography */
        //        font-size: 10px;
        //        font-family: Arial, sans-serif;
        //        color: #333;
        //
        //        /* Border and background */
        //        border: 2px solid #ddd;
        //        border-radius: 5px;
        //        background-color: #f9f9f9;
        //
        //        &:focus {
        //            border-color: #007bff;
        //            box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
        //        }
        //
        //        /* Add some hover effect for better user feedback */
        //        &:hover {
        //            cursor: pointer;
        //            background: white;
        //        }
        //
        //        /* Add some transition for a smooth effect */
        //        #newUrl,
        //        #newName {
        //            transition: background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        //        }
        //    }
        //
        //    .fa {
        //        font-size: 20px;
        //        transition: 0.1s;
        //
        //        &:hover {
        //            opacity: 0.8;
        //        }
        //
        //        &:active {
        //            color: #00ff00;
        //            opacity: 1;
        //        }
        //    }
        //}

    }

    .img-profile {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 250px;
        height: 250px;
        background-size: cover !important;
        background-repeat: no-repeat !important;
        background-position: center !important;
        border: 0;
        z-index: 10;

    }

    .remove-img-profile {
        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        top: 0;
        right: -30px;
        transform: translate(-50%, -50%);

        color: #ff0000;
        background: #fcfcfc;
        border-radius: 50%;

        z-index: 12;


        .fa {
            font-size: 30px;
            cursor: pointer;
        }

    }

    .chat-box {
        position: relative;

        width: 100%;
        height: calc(100% - 120px);
        padding: 0 50px;

        overflow-y: auto;
        transition: 0.8s;

        .message {
            position: relative;
            margin: 5px 0;

            width: 100%;
            min-height: 50px;
            display: flex;

            transition: 0.2s;

            &:active {
                background: #4aa0e6;
                opacity: 0.8;
                border-radius: 0;
            }

            &:active .my-message {
                border-radius: 0;
                background: #4aa0e6;
            }

            &:active .my-message .txt-message-normal:before {
                opacity: 0;
            }

            &:active .friend-message {
                border-radius: 0;
                background: #4aa0e6;
            }

            &:active .friend-message .txt-message-normal:before {
                opacity: 0;
            }

            p {
                margin: 0;
                font-size: 0.8rem;
            }


        }
        .my-message {
            position: relative;
            max-width: 65%;


            text-align: right;
            background: #fffbdb;

            padding: 8px 20px 0 20px;


            border-radius: 10px;
            transition: 0.2s;

            .fa {
                position: absolute;
                top: -12px;
                left: -12px;
                font-size: 25px;

                color: red;
                background: white;
                border-radius: 50%;

                opacity: 0;

                transition: 0.2s;

                cursor: pointer;
            }

            &:hover .fa {
                opacity: 1;
            }

            &:active .fa {
                opacity: 0;
            }


            .my-time {
                font-size: 0.8rem;
                opacity: 0.5;
            }

            .txt-message-normal::before {
                content: "";
                position: absolute;
                top: 0;
                right: -15px;
                width: 25px;
                height: 25px;
                background: linear-gradient(135deg, #fffbdb 0%, #fffbdb 50%, transparent 50%, transparent);

                transition: 0.2s;
            }

        }
        .friend-message {
            position: relative;

            max-width: 65%;

            text-align: left;

            background: rgb(255, 229, 229);

            padding: 8px 15px 0 15px;
            border-radius: 10px;

            transition: 0.2s;


            .fa {
                position: absolute;
                top: -12px;
                right: -12px;
                font-size: 25px;

                color: red;
                background: white;
                border-radius: 50%;

                opacity: 0;

                transition: 0.2s;

                cursor: pointer;
            }

            &:hover .fa {
                opacity: 1;
            }

            &:active .fa {
                opacity: 0;
            }

            .friend-time {
                font-size: 0.8rem;
                opacity: 0.5;
            }

            .txt-message-normal::before {
                content: "";
                position: absolute;
                top: 0;
                left: -15px;
                width: 25px;
                height: 25px;
                background: linear-gradient(-135deg, rgb(255, 229, 229) 0%, rgb(255, 229, 229) 50%, transparent 50%, transparent);

                transition: 0.2s;

            }
        }
    }

    .typing {
        position: absolute;
        width: 100%;
        bottom: 50px;
        left: 50px;

        color: rgb(15, 234, 110);

        font-weight: bold;
        font-size: 0.6rem;
    }

    .footer-right {
        z-index: 9;

        position: relative;

        height: 60px;
        width: 100%;

        padding: 15px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        background: #F2F3F5;

        .first {


            width: 10%;
            display: flex;
            justify-content: center;

            font-size: 1.3rem;


            .emojis-header {
                z-index: 1;
                top: - 400px;
                left: 0;
                position: absolute;

                background: #F2F3F5;

                display: flex;
                justify-content: center;
                align-items: center;

                height: 50px;
                width: 100%;

                opacity: 0;

                #searchEmojis {
                    width: 80%;
                    border: none;
                    outline: none;

                    border-radius: 20px;
                    padding: 8px 15px;
                    font-size: 0.8rem;

                    background: white;
                }
            }

            .active {
                opacity: 1;
            }

            .emojis {
                z-index: 0;
                top: - 350px;
                left: 0;
                position: absolute;

                width: 100%;
                height: 350px;

                padding: 0 1rem;

                display: flex;
                flex-wrap: wrap;

                overflow-y: auto;

                background: #F2F3F5;

                opacity: 0;

                .emoji {

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    font-size: 2rem;
                    margin: 0.5rem;

                    cursor: pointer;


                    border-radius: 50%;

                    height: 50px;
                    width: 50px;

                    transition: 1s;

                    &:hover {
                        background: white;
                    }
                }
            }

            .active {
                opacity: 1;
            }
        }

        .second {
            width: 80%;


            #search {
                width: 100%;
                border: none;
                outline: none;

                border-radius: 20px;
                padding: 8px 15px;
                font-size: 0.8rem;

                background: white;
            }
        }

        .third {
            width: 10%;
            display: flex;
            justify-content: center;

            font-size: 1.3rem;

        }
    }
}


</style>
