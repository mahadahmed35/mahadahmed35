CREATE FUNCTION increment(number integer)
RETURNS integer
AS $$
BEGIN
RETURN number + 1;
END;
$$ LANGUAGE plpgsql;