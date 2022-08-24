<template>
  <div class="about-me">
    <div class="about-me_wrapper">
      <div class="info">
        <img src="../assets/avatar.png" alt="Avatar" class="info_avatar" />
        <div class="info_wrapper">
          <p class="info_FIO">Лозовая Анна Яковлевна</p>
          <p class="info_occupation">Front-end разработчик (Vue)</p>
        </div>
      </div>
      <div class="description">
        <p class="description_text">
          Занимаюсь разработкой SPA на Vue + Vuex. Обожаю верстать и вдыхать в макеты
          жизнь. За время своей работы сталкивалась с технологией WebRTC.
          <br />
          Всегда готова к изучению чего-то нового.
          <br />
          Ответственная, неконфликтная, коммуникабельная.
          <br />
          Готова работать в команде и умею читать чужой код.
        </p>
        <div class="description_location">
          <img
            src="../assets/maps-and-flags.png"
            alt="Icon Location"
            class="description_location__icon"
          />
          <span class="description_location__city">Санкт-Петербург, Россия</span>
        </div>
      </div>
    </div>
    <div class="about-me_wrapper">
      <div class="contacts">
        <h3 class="contacts_title">КОНТАКТЫ</h3>
        <div class="contacts_divider"></div>
        <ul class="contacts_list">
          <li class="contacts_list__item">
            <img
              src="../assets/phone-contact.png"
              alt="Icon Pnone"
              class="contacts_list__item icon"
            />
            <a class="contacts_list__item contact" href="tel:+79650715657"
              >+7 (965) 071 - 56 - 57</a
            >
          </li>
          <li class="contacts_list__item">
            <img
              src="../assets/mail.png"
              alt="Icon Email"
              class="contacts_list__item icon"
            />
            <a
              class="contacts_list__item contact"
              href="mailto:anyalozovaya2014@gmail.com"
              >anyalozovaya2014@gmail.com</a
            >
          </li>
          <li class="contacts_list__item icon">
            <img
              src="../assets/telegram.png"
              alt="Icon Telegram"
              class="contacts_list__item icon"
            />
            <a class="contacts_list__item contact" href=" https://t.me/anya_loza"
              >anya_loza</a
            >
          </li>
          <li class="contacts_list__item">
            <img
              src="../assets/github.png"
              alt="Icon Github"
              class="contacts_list__item icon"
            />
            <a
              class="contacts_list__item contact"
              href="https://github.com/lozovaya-collab"
            >
              github.com/lozovaya-collab</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about-me",
};
</script>

<style lang="scss" scoped>
.about-me {
  display: flex;
  justify-content: space-between;
  &_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 48%;
    .description {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 30px;
      padding: 15px 20px;
      border: 5px solid #005f95;
      border-radius: 40px;
      font-family: "Montserrat", sans-serif;
      font-weight: 400;
      box-sizing: border-box;
      &_text {
        line-height: 25px;
      }
      &_location {
        display: flex;
        align-items: center;
        font-weight: 500;
        &__icon {
          width: 20px;
          height: 20px;
          margin-right: 15px;
        }
      }
    }
    .info {
      display: flex;
      width: 100%;
      height: 66%;
      background: #005f95;
      border-radius: 40px;
      padding: 20px;
      box-sizing: border-box;
      &_avatar {
        height: 150px;
        margin-right: 30px;
      }
      &_FIO {
        font-family: "Montserrat Alternates", sans-serif;
        font-weight: 600;
        color: white;
        font-size: 24px;
        line-height: 29px;
        width: 60px;
      }
      &_occupation {
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        color: white;
      }
    }
    .contacts {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 70%;
      &_title {
        color: #221f1f;
        width: 90%;
        font-family: "Montserrat Alternates", sans-serif;
        font-weight: 600;
        margin: 5px 0;
        text-align: center;
      }
      &_divider {
        width: 90%;
        height: 0px;
        background: #005f95;
        border: 1px solid #005f95;
      }
      &_list {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        width: 90%;
        &__item {
          display: flex;
          align-items: center;
          width: 100%;
          height: 60px;
          background: none;
          .icon {
            margin-right: 15px;
            width: 30px;
            height: 30px;
          }
          .contact {
            text-decoration: none;
            font-family: "Montserrat", sans-serif;
            font-weight: 400;
            color: #221f1f;
            &:hover {
              color: #005f95;
            }
          }
        }
      }
    }
  }
}
</style>
