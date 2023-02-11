"""
    Application: Balance Delimiters
    Data Structure: Stack
"""
from stack import Stack


def isValidSourceFile(srcfile) -> bool:
    s = Stack()
    for line in srcfile:
        for char in line:
            if char in "{[(":
                s.push(char)
            elif char in "}])":
                if s.is_empty():
                    return False
                else:
                    left = s.pop()
                    if (char == "}" and left != "{") or \
                            (char == "]" and left != "[") or \
                            (char == ")" and left != "("):
                        return False
    return s.is_empty()


# Driver Method
if __name__ == "__main__":
    with open("test-file.java", "r") as javaFile:
        print("Checking file...")
        print("Delimiter balance state: ", isValidSourceFile(javaFile))

