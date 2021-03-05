<template>
  <div class="wrap" :class="{show: isActive}" @click="openMenu()">
    <transition name="showMenu">
    <div class="drop-down__menu" v-show="isActive">
      <slot></slot>
    </div>
    </transition>
    <div class="drop-down">
      {{name}}
    </div>
  </div>
</template>

<script>
export default {
name: "DropDown",
  data: function () {
    return {
      isActive: false,
      name: "Menu"
    }
  },
  methods: {
  openMenu: function(){
    this.isActive = !this.isActive;
    if(this.isActive) this.name = "Close"
    else this.name = "Menu";
}
  }
}
</script>

<style lang="scss">
.showMenu-enter-active, .showMenu-leave-active {
  transition: transform .3s;
}
.showMenu-enter, .showMenu-leave-to {
  transform: translate(-100%);
}

.show{
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  color: black;
}

.wrap {
  display: flex;
  cursor: pointer;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
}
.drop-down {
  text-align: left;
  margin-left: 10px;
  padding-top: 20px;

  &__menu {
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: white;
    width: 20%;

    a {
      text-decoration: none;
      color: #18191A;
      margin-top: 20px;

      &:hover {
        text-decoration: underline;
        color: inherit;
      }
    }
  }
}
</style>