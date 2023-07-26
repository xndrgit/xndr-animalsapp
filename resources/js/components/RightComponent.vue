<template>
    <div class="container-right">
        <div class="header-right">
            <div :class="viewProfile ? 'activeProfile': '' " class="user-image" @click="viewProfileFunction()">
                <img :alt="contactsGift[activeChatGift].name" :src="contactsGift[activeChatGift].avatar" class="cover">
            </div>
            <h4 class="activeName">{{ contactsGift[activeChatGift].name }}</h4>
            <div class="nav-icons">
                <i class="ml-2 fa fa-solid fa-gear" @click="handleSettings"></i>
                <div :class="settings ? 'active' : ''" class="settings">
                    <ul>
                        <li @click="clearChat(activeChatGift)">Clear Chat | 🧹</li>
                        <li><a href="https://github.com/XanderWorld/laravel7-spiderapp-XanderWilde">Repository | 🔏</a>
                        </li>
                        <li><a href="https://github.com/XanderWorld">Git | ℹ️</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div v-if="viewProfile"
             :style="{ background: `url(${contactsGift[activeChatGift].avatar})` }" class="img-profile">
            <div v-if="viewProfile" class="remove-img-profile" @click="removeProfileFunction">
                <i class="fa fa-solid fa-circle-xmark fa-bounce"></i>
            </div>
        </div>


        <div ref="chatBox" :class="viewProfile ? 'bgOpacity': '' " class="chat-box">
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
                <i class="fa mr-3 fa-regular fa-face-smile fa-bounce" @click="handleEmojis"></i>
                <!--                <i class="fa fa-solid fa-paperclip"></i>-->


                <div class="emojis-header">
                    <input id="searchEmojis" v-model="emojiInput" v-focus
                           name="searchEmojis" placeholder="Search an emoji" type="text"
                           @keyup="searchEmojis(emojiInput)">
                </div>
                <div class="emojis">
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                    <div class="emoji">🪦</div>
                </div>
            </div>
            <div class="second">
                <input id="search" v-model="newMsgInput" v-focus
                       name="search" placeholder="Type a message" type="text" @keyup.enter="addNewMessage(newMsgInput)">
            </div>
            <div class="third">
                <i class="fa fa-regular fa-paper-plane fa-bounce" @click="addNewMessage(newMsgInput)"></i>
                <!--                <i class="fa fa-solid fa-microphone-slash"></i>-->
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment";

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
        this.scrollDown();
    },
    props: {
        contactsGift: Array,
        activeChatGift: Number,
        userGift: Object,
    },
    watch: {
        activeChatGift(newVal, oldVal) {
            //  This ensures that the scrollHeight of the chatBox element has been updated before the scrollDown() function is called.
            this.$nextTick(() => {
                this.scrollDown();
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

            newMsgInput: null,
            emojiInput: null,

            viewProfile: false,

            typing: false,

            settings: false,
            emojis: true,
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
                this.newMsgInput = null;

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
                    const randomIndex = Math.floor(Math.random() * this.dogMsg.length);
                    this.newBotMsg = {
                        date: moment().format('D/M/YY, HH:mm:ss'),
                        message: `Wof! ${this.dogMsg[randomIndex]}`,
                        status: 'received',
                    }
                    this.$emit('dogMsg', this.newBotMsg);
                    this.newBotMsg = null;
                    this.$emit('dogAct', active);

                } else if (active === 1) {
                    const randomIndex = Math.floor(Math.random() * this.puchoMsg.length);
                    this.newBotMsg = {
                        date: moment().format('D/M/YY, HH:mm:ss'),
                        message: `Grrr! ${this.puchoMsg[randomIndex]}`,
                        status: 'received',
                    }
                    this.$emit('puchoMsg', this.newBotMsg);
                    this.newBotMsg = null;
                    this.$emit('PuchoAct', active);
                } else if (active === 2) {
                    const randomIndex = Math.floor(Math.random() * this.cowMsg.length);
                    this.newBotMsg = {
                        date: moment().format('D/M/YY, HH:mm:ss'),
                        message: `Muuu! ${this.dogMsg[randomIndex]}`,
                        status: 'received',
                    }
                    this.$emit('cowMsg', this.newBotMsg);
                    this.newBotMsg = null;
                    this.$emit('CowAct', active);
                } else if (active === 3) {
                    const randomIndex = Math.floor(Math.random() * this.sheepMsg.length);
                    this.newBotMsg = {
                        date: moment().format('D/M/YY, HH:mm:ss'),
                        message: `Beee! ${this.sheepMsg[randomIndex]}`,
                        status: 'received',
                    }
                    this.$emit('sheepMsg', this.newBotMsg);
                    this.newBotMsg = null;
                    this.$emit('SheepAct', active);
                }
                clearInterval(intervalId);
                this.typing = false;

                //  This ensures that the scrollHeight of the chatBox element has been updated before the scrollDown() function is called.
                this.$nextTick(() => {
                    this.scrollDown();
                });
            }, 3000);


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
        }

    },
}
</script>


<style lang="scss" scoped>
.bgOpacity {
    background: #F2F3F5;
}

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


            .cover {
                position: absolute;
                top: 0;
                left: 0;

                overflow: hidden;

                border-radius: 50%;

                height: 100%;
                width: 100%;

                object-fit: cover;
            }
        }

        .activeProfile {
            border: 2px solid #05fa6f;
        }

        .activeName {
            margin: 0;
            font-weight: bolder;
        }

        .nav-icons {
            font-size: 1rem;
            position: relative;

            .settings {
                position: absolute;
                width: 200px;

                background: #f6f6f6;

                right: -10px;

                z-index: 9;
                opacity: 0;

                transition: 0.8s;

                ul {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-end;

                    list-style: none;

                    padding: 0 1rem;

                    li {
                        cursor: pointer;
                        width: fit-content;

                        &:hover {
                            color: #4aa0e6;
                        }
                    }

                    a {
                        text-decoration: none;
                        text-underline: none;
                        color: black;

                        &:hover {
                            color: #4aa0e6;
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

    .img-profile {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 400px;
        height: 400px;

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
        z-index: 999999999999999999999999999999999999999999;

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

            .fa {
                cursor: pointer;
                transition: 0.1s;

                &:active {
                    font-size: 30px;
                }
            }


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

            .emojis {
                z-index: 0;
                top: - 350px;
                left: 0;
                position: absolute;

                width: 100%;
                height: 350px;

                padding: 1rem;

                display: flex;
                flex-wrap: wrap;

                overflow-y: auto;

                background: #F2F3F5;

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

            .fa {
                cursor: pointer;
                transition: 0.1s;

                &:active {
                    font-size: 30px;
                }
            }
        }
    }
}
</style>
