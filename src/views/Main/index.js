export default {
  data() {
    return {
      isCollapsed: true,
      width: 1,
      align: "center"
    };
  },
  methods: {
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    },
    collapsedSider() {
      console.log(this);
      if (this.isCollapsed) {
        this.width = 3;
        this.isCollapsed = false;
        this.align = "flex-start";
      } else {
        this.width = 1;
        this.align = "center";
        this.isCollapsed = true;
      }
    }
  }
};
