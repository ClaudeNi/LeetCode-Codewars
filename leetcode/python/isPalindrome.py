class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        
        Given an integer x, return true if x is palindrome integer.
        An integer is a palindrome when it reads the same backward as forward.
        """
        if x < 0:
            return False
        rev = list(str(x))
        rev.reverse()
        rev = int("".join(rev))
        if x == rev:
            return True
        return False
