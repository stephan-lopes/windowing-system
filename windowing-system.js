// @ts-check

// 1) Define Size for storing the dimensions of the window
export function Size(width = 80, height = 60) {
    this.height = height;
    this.width = width;
}

Size.prototype.resize = function (width, height) {
    this.height = height;
    this.width = width;
}

// 2) Define Position to store a window position
export function Position(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

Position.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
}

// 3) Define a ProgramWindow class
export class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600)
        this.size = new Size()
        this.position = new Position()
    }

    // 4) Add a method to resize the window
    resize(size) {
        const maxWidth = this.screenSize.width - this.position.x;
        const maxHeight = this.screenSize.height - this.position.y;

        const newSizeWidth = size.width < 1 ? 1 : Math.min(size.width, maxWidth)
        const newSizeHeight = size.height < 1 ? 1 : Math.min(size.height, maxHeight)

        this.size.resize(newSizeWidth, newSizeHeight)
    }


    // 5) Add a method to move the window
    move(position) {
        const maxWidth = this.screenSize.width - this.size.width
        const maxHeight = this.screenSize.height - this.size.height
        
        const positionX = position.x < 0 ? 0 : position.x > maxWidth ? maxWidth : position.x
        const positionY = position.y < 0 ? 0 : position.y > maxHeight ? maxHeight : position.y
        
        this.position.move(positionX, positionY)
    }
}

export function changeWindow(programWindow) {
    const size = new Size(400, 300)
    const position = new Position(100, 150)
    
    programWindow.resize(size)
    programWindow.move(position)

    return programWindow
}